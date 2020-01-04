const express = require('express');
const morgan = require('morgan');

const productController = require('../controllers/productController')

const productRouter = express.Router();
productRouter.use(morgan('dev'));

productRouter.route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

productRouter.route('/:id')
  .get(productController.getProductById)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports.routes = productRouter;
