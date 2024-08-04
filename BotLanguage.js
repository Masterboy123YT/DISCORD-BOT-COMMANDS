const { model, Schema } = require('mongoose');

const botLanguageSchema = new Schema({
  Guild: String,
  Language: String,
});

module.exports = model('botLanguage', botLanguageSchema);