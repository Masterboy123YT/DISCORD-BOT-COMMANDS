const { model, Schema } = require('mongoose');

const rankSchema = new Schema({
  Guild: String,
  Role: String,
  Level: Number,
});
module.exports = model('rankSchem', rankSchema);