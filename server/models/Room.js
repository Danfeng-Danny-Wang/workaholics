const mongoose = require('mongoose');
const Message = require('./Message');

const { Schema } = mongoose;

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  messages: [Message.schema]
  
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;