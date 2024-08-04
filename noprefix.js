const { model, Schema } = require('mongoose');

const NoPrefixUserSchema = new Schema({
    UserId: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('NoPrefixUser', NoPrefixUserSchema);
