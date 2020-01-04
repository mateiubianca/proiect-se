const mongoose = require('mongoose');

const User = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        default: 'user',
    },
    orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}],
});

module.exports = mongoose.model('User', User);