const mongoose = require('mongoose');

const afkSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    guilds: {
        type: Map,
        of: String // Stores original nicknames keyed by guild ID
    },
    isAFK: {
        type: Boolean,
        default: false
    },
    afkStartTime: {
        type: Date,
        required: true,
        default: Date.now
    },
    Reason: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('AFK', afkSchema);
