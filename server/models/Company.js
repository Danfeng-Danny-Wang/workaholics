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

companySchema.methods.isCorrectPassword = async function(code) {
  return await compare(code, this.code);
};

const Company = mongoose.model('Company', companySchema);

// Company.find({})
//   .exec()
//   .then(async collection => {
//     if (collection.length === 0) {
//       try {
//         const insertedCompanies = await Company.insertMany([
//           { name: 'Company1', 
//             code: 'joker', 
//             chatRooms: [rooms[0]._id, rooms[1]._id, rooms[2]._id] 
//           },
//           { name: 'Company2', 
//             code: 'batman', 
//             chatRooms: [rooms[3]._id, rooms[4]._id, rooms[5]._id] 
//           },
//           { name: 'Company3', 
//             code: 'riddler', 
//             chatRooms: [rooms[6]._id, rooms[7]._id, rooms[8]._id] 
//           },
//         ]);
//       console.log('Inserted companies', insertedCompanies);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   });

module.exports = Company;