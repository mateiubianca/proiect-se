const express = require('express');
const morgan = require('morgan');

const blogPostController = require('../controllers/blogPostController')

const blogPostRouter = express.Router();
blogPostRouter.use(morgan('dev'));

blogPostRouter.route('/')
  .get(blogPostController.getAllPosts)
  .post(blogPostController.createPost);

blogPostRouter.route('/:id')
  .get(blogPostController.getPostById)
  .put(blogPostController.updatePost)
  .delete(blogPostController.deletePost);

module.exports.routes = blogPostRouter;
