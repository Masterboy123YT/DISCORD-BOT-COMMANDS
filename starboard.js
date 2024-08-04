const mongoose = require('mongoose');

const starboardSchema = new mongoose.Schema({
  Guild: {
    type: String,
    required: true,
  },
  Channel: {
    type: String,
    required: true,
  },
  Stars: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Starboard', starboardSchema);
