const { model, Schema } = require('mongoose');

const  snipedSchema = new Schema({
  Guild: String,
  Channel: String,
  Message: String,
  Author: String,
  Image: String,
  Time: String,
  ProfileURL: String,
});
module.exports = model('snipedSchema', snipedSchema);