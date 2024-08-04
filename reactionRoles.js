const mongoose = require('mongoose');

const reactionRoleSchema = new mongoose.Schema({
  Guild: { type: String, required: true },
  MessageID: { type: String, required: true },
  RoleID: { type: String, required: true },
  Emoji: { type: String, required: true },
});

module.exports = mongoose.model('ReactionRoles', reactionRoleSchema);
