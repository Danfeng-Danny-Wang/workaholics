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

  //TODO: add these to get the stuff we need
    company: async (parent, args, context) => {
      return await Company.find();
    },

    room: async (parent, args, context) => {

    },

    message: async (parent, args, context) => {

    },
  },

  Mutation: {
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
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

    addMessage: async (parent, { roomName, username, text, timeStamp }, context) => {
      const newMessage = await Message.create({ username, text, timeStamp });
      if (context.user) {
        return Room.findOneAndUpdate(
          { name: roomName },
          {
            $addToSet: { messages: newMessage },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }

      throw AuthenticationError('You must be logged in!')
    },

    getMessages: async (parent, { roomId }, context) => {
      if (context.user) {
        const room = await Room.findOne({ _id: roomId });
        const messages = room.messages;
        return messages;
      }

      throw AuthenticationError('You must be logged in!')
    },
  },
};

module.exports = resolvers;