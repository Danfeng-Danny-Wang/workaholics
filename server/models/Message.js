const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
  timeStamp: {
    type: String,
    required: true,
    trim: true,
  }
});


module.exports = messageSchema;