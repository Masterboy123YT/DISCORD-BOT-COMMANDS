const { model, Schema } = require('mongoose')

const welcomeSchema = new Schema({
  Guild: String,
  Channel: String,
  Type: String
});
module.exports = model('welcome', welcomeSchema);