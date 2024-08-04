const { model, Schema } = require('mongoose');

const EnableDisableCommandsSchemas = new Schema({
    Disabled: Boolean,
    Command: String,
    Prefix: Boolean,
    Guild: String
});

module.exports = model('EnableDisableCommandsSchemas', EnableDisableCommandsSchemas)