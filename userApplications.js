const { Schema, model } = require('mongoose');

const userApplicationSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  guildId: {
    type: String,
    required: true,
  },
  responses: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Declined'],
    default: 'Pending',
  },
});

module.exports = model('UserApplication', userApplicationSchema);
