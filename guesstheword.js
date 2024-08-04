const { model, Schema } = require('mongoose')

const gtwSchema = new Schema({
  Guild: String,
  Channel: String,
  Word: String
});
module.exports = model('gtw', gtwSchema);