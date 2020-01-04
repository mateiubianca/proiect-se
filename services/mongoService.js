const mongoose = require('mongoose');
const product = require('../models/Product');
const user = require('../models/User');
const blogPost = require('../models/BlogPost');
const comment = require('../models/Comment')
const order = require('../models/Order')
const review = require('../models/Review')

class MongoService {
  constructor() {
    mongoose.connect('mongodb://localhost:27017/node-react-starter', { useNewUrlParser: true });
    this.Product = product;
    this.User = user;
    this.BlogPost = blogPost;
    this.Comment = comment;
    this.Order = order;
    this.Review = review;
  }
}

module.exports = new MongoService();