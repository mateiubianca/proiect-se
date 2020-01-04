const mongoose = require('mongoose');

const Order = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        default: null
    },
    status: {
        type: String,
    },
    createdDate: { 
        type: Date,
        default: Date.now
    },
    total: {
        type: Number,
    },
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
});

module.exports = mongoose.model('Order', Order);