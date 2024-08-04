const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  channelId: {
    type: String,
    required: true,
    unique: true,
  },
  discordChannels: [
    {
      guildId: {
        type: String,
        required: true,
      },
      channelId: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Notification', notificationSchema);
