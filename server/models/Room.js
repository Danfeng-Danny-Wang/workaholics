const mongoose = require('mongoose');
const messageSchema = require('./Message');

const { Schema } = mongoose;

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  messages: [messageSchema],
  
});

const Room = mongoose.model('Room', roomSchema);

Room.find({})
  .exec()
  .then(async collection => {
    if (collection.length === 0) {
      try {
        const insertedRooms = await Room.insertMany([
          { name: 'Room1' },
          { name: 'Room2' },
          { name: 'Room3' },
          { name: 'Room4' },
          { name: 'Room5' },
          { name: 'Room6' },
          { name: 'Room7' },
          { name: 'Room8' },
          { name: 'Room9' },
        ]);
      console.log('Inserted rooms', insertedRooms);
      } catch (err) {
        console.error(err);
      }
    }
  });

module.exports = Room;