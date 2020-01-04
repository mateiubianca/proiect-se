const mongoose = require('mongoose');

const Product = new mongoose.Schema({
    name: {
        type: String,
    },
    tags: [String],
    description: {
        type: String,
    },
    price: {
        type: Number
    },
    clientReview: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}],
    noProducts: {
        type: Number
    },
    imageURL: {
        type: String,
    },
    created: { 
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Product', Product);