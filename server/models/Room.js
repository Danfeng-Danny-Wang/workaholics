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

module.exports = Room;