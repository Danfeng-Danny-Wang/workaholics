const { User } = require('../models');
const { Company } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
// TODO: get a single user by either email or their username
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ email: user ? user.email : params.email }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this email!' });
    }

    res.json(foundUser);
  },

  async createUser({ body }, res) {
// TODO: create user will need to choose a company and input the company code for verification
// wrap all this in a try catch or if statement to verify the company code
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });

  },

  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
};
