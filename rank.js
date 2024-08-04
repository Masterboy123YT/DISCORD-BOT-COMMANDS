const { model, Schema } = require('mongoose');

const rankSchema = new Schema({
  Guild: String,
  Level: Number,
  XP: Number,
  NextLevelXP: Number,
  User: String
});
module.exports = model('rankSchemass', rankSchema);