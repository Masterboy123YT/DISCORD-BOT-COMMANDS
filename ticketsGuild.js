const { model, Schema } = require('mongoose');

const ticketSchemaGuild = new Schema({
  Guild: String,
  Role: String,
  Category: String,
  Channel: String,
  TicketsLimit: Number,
  Message: String
});
module.exports = model('ticketSchemaGuild', ticketSchemaGuild);