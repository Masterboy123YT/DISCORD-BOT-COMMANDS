const { model, Schema } = require('mongoose')

const gtnSchema = new Schema({
  Guild: String,
  Channel: String,
  Number: Number
});
module.exports = model('gtn', gtnSchema);