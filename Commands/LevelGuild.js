const { model, Schema } = require('mongoose');

const levelSchemaGuild = new Schema({
  Guild: String,
  Channel: String,
  Message: String,
  Type: String,
});
module.exports = model('levelSchemaGuild', levelSchemaGuild);
