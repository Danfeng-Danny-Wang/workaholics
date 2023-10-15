const { signToken, AuthenticationError } = require('../utils/auth');
const { User, Company, Room, Message } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError('You need to be logged in!');
    },

    companies: async (parent, args ) => {
      return await Company.find();
    },

    rooms: async (parent, args, context) => {
      if (context.user) {
        const company = await Company.findOne({ name: context.user.company });
        const rooms = company.chatRooms;
        return rooms;
      }
      throw AuthenticationError('You need to be logged in!');
    },

  },

  Mutation: {
    loginUser: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError('Username or password is incorrect');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError('Username or password is incorrect');
      }

      const token = signToken(user);
      return { token, user };
    },

    addUser: async (parent, { firstName, lastName, username, email, password, company }) => {
      const user = await User.create({ firstName, lastName, username, email, password, company });
      const token = signToken(user);

      return { token, user };
    },

    verifyCompanyCode: async (parent, { name, code }) => {
      const company = await Company.findOne({ name });
      const correctCode = await company.isCorrectPassword(code);

      if (!correctCode) {
        throw new Error('Company and code do not match'); 
      }
      
      return company;
    },

    addMessage: async (parent, { roomId, username, text, timeStamp }, context) => {
      const newMessage = await Message.create({ username, text, timeStamp });
      if (context.user) {
        return Room.findOneAndUpdate(
          { _id: roomId },
          { $push: { messages: newMessage }, },
          { new: true, runValidators: true, },
        );
      }

      throw AuthenticationError('You must be logged in!')
    },

    getMessages: async (parent, { roomId }, context) => {
      if (context.user) {
        const room = await Room.findOne({ _id: roomId });
        return room.messages;
      }

      throw AuthenticationError('You must be logged in!')
    },
  },
};

module.exports = resolvers;