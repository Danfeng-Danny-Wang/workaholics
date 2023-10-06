const mongoose = require('mongoose');

const { Schema } = mongoose;

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;