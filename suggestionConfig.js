// STORAGE/suggestionConfig.js
const mongoose = require('mongoose');

const suggestionConfigSchema = new mongoose.Schema({
  Guild: { type: String, required: true },
  Channel: { type: String, required: true },
});

module.exports = mongoose.model('SuggestionConfig', suggestionConfigSchema);
