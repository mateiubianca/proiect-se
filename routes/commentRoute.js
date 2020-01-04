const express = require('express');
const morgan = require('morgan');

const commentController = require('../controllers/commentContoller')

const commentRouter = express.Router();
commentRouter.use(morgan('dev'));

commentRouter.route('/')
  .get(commentController.getAllComments)
  .post(commentController.createComment);

  commentRouter.route('/:id')
  .get(commentController.getCommentById)
  .put(commentController.updateComment)
  .delete(commentController.deleteComment);

module.exports.routes = commentRouter;
