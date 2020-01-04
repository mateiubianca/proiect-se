const mongoose = require('mongoose');

const BlogPost = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
});

module.exports = mongoose.model('BlogPost', BlogPost);