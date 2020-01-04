const mongoose = require('mongoose');

const Review = new mongoose.Schema({
    stars: {
        type: Number,
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Comment',
        default: null
    },
});

module.exports = mongoose.model('Review', Review);