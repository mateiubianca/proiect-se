const mongoose = require('mongoose');

const Comment = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        default: null,
    },
    createdDate: { 
        type: Date,
        default: Date.now
    },
    content: {
        type: String,
    }
});

module.exports = mongoose.model('Comment', Comment);