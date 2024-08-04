const { Schema, model } = require('mongoose');

const applicationSchema = new Schema({
  guildId: {
    type: String,
    required: true,
  },
  channelId: {
    type: String,
    required: true,
  },
  roleId: {
    type: String,
    required: true,
  },
  questions: {
    type: [String],
    required: true,
  },
  enabled: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('Application', applicationSchema);
