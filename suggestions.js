// STORAGE/suggestions.js
const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  Guild: { type: String, required: true },
  Channel: { type: String, required: true },
  User: { type: String, required: true },
  Suggestion: { type: String, required: true },
  Status: { type: String, default: 'Pending' },
  Upvotes: { type: Number, default: 0 },
  Downvotes: { type: Number, default: 0 },
  UpvotedUsers: { type: [String], default: [] },
  DownvotedUsers: { type: [String], default: [] },
  MessageId: { type: String, required: true }
});

module.exports = mongoose.model('Suggestion', suggestionSchema);
