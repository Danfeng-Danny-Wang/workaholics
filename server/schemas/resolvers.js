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

    getCompany: async (parent, { name, code }) => {
      const company = await Company.findOne({ name });
      const companyCode = await company.isCorrectPassword(code);

      if (!companyCode) {
        throw new Error('Company and code do not match'); 
      }
      
      return company;
    },

  // TODO: will need to add the message to the room.message
    addMessage: async (parent, { username, text, timeStamp }) => {
      const message = await Message.create({ username, text, timeStamp });

      return message;
    }
  },
};

module.exports = resolvers;