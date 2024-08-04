const { model, Schema } = require('mongoose');

const modlogsSchema = new Schema({
  Guild:  String,
  Channel: String,
});

module.exports = model('modlogs', modlogsSchema)