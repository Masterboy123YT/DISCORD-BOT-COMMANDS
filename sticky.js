const { model, Schema } = require('mongoose')

const sticky = new Schema({
    Message: String,
    ChannelID: String,
    LastMessage: String,
    LastMessageID: String,
    MaxCount: { type: Number, default: 6 },
    CurrentCount: { type: Number, default: 0 }
})

module.exports = model('stickys', sticky)