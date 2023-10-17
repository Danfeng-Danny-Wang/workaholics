const { signToken, AuthenticationError } = require('../utils/auth');
const { User, Company, Room, Message } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },

    companies: async (parent, args, context) => {
      if (context.user) {
        return await Company.find({ name: context.user.company }).populate({populate: 'chatRooms'});
      } else {
        return await Company.find();
      }
    },

  },

  Mutation: {
    loginUser: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

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
      const correctCode = await company.isCorrectCode(code);
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

      throw AuthenticationError;
    },

    getMessages: async (parent, { roomId }, context) => {
      if (context.user) {
        const room = await Room.findOne({ _id: roomId });
        return room.messages;
      }

      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;