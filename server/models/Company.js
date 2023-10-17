const mongoose = require('mongoose');

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
  chatRooms: [{
    type: Schema.Types.ObjectId,
    ref: 'Room',
  }]
});

companySchema.methods.isCorrectPassword = async function(code) {
  return await compare(code, this.code);
};

const Company = mongoose.model('Company', companySchema);

module.exports = Company;