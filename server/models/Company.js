const mongoose = require('mongoose');

const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    unique: true,
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

companySchema.methods.isCorrectCode = async function(code) {
  return code === this.code;
};

const Company = mongoose.model('Company', companySchema);

module.exports = Company;