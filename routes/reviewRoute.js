const express = require('express');
const morgan = require('morgan');

const reviewController = require('../controllers/reviewController')

const reviewRouter = express.Router();
reviewRouter.use(morgan('dev'));

reviewRouter.route('/')
  .get(reviewController.getAllReviews)
  .post(reviewController.createReview);

  reviewRouter.route('/:id')
  .get(reviewController.getReviewById)
  .put(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports.routes = reviewRouter;
