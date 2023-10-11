const { User } = require('../model');
const { Company } = require('../model');
const { signToken } = require('../utils/auth');

module.exports = {

  async createUser({ body }, res) {
    const foundCompany = await Company.findOne({ body });
    const correctCode = await user.isCorrectPassword(body.companyCode);

    if (!correctCode) {
      return res.status(400).json({ message: 'Wrong company code!' });
    }

    if (foundCompany.code === body.companyCode) {

      const user = await User.create(body);

      if (!user) {
        return res.status(400).json({ message: 'Something is wrong!' });
      }
      const token = signToken(user);
      res.json({ token, user });

    }
  },

  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ email: user ? user.email : params.email }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this email!' });
    }

    res.json(foundUser);
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
