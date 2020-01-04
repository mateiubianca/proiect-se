const express = require('express');
const morgan = require('morgan');

const userController = require('../controllers/userController')

const userRouter = express.Router();
userRouter.use(morgan('dev'));

userRouter.route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

  userRouter.route('/:id')
  .get(userController.getUserById)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

module.exports.routes = userRouter;
