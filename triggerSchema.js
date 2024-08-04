const { model, Schema } = require('mongoose')

let triggerSchema = new Schema({
    Guild: String,
    Phrase: String,
    Reply: String,
    Block: Array
});

module.exports = model('triggerschema', triggerSchema)