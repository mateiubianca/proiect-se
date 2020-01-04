const express = require('express');
const morgan = require('morgan');

const orderController = require('../controllers/orderController')

const orderRouter = express.Router();
orderRouter.use(morgan('dev'));

orderRouter.route('/')
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);

  orderRouter.route('/:id')
  .get(orderController.getOrderById)
  .put(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports.routes = orderRouter;
