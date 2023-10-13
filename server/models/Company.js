const mongoose = require('mongoose');
const Room = require('./Room');

const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  code: {
    type: String,
    required: true,
  },
  chatRooms: [Room.schema]
});

// this may not work properly
companySchema.methods.isCorrectPassword = async function(code) {
  return await compare(code, this.code);
};

const Company = mongoose.model('Company', companySchema);

module.exports = Company;