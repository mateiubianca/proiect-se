const mongo = require('../services/mongoService');

function getAllOrders(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Order.find().exec()
        .then((data) => resolve(res.status(200).json(data)))
        .catch((err) => {
            console.log(err);
            return reject(res.status(500).send(err));
        });
    })
}

function createOrder(req, res, next){
    return new Promise((resolve, reject) => {
        const order = new mongo.Order(req.body);
        order.save()
          .then((data) => resolve(res.status(201).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function getOrderById(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Order.findById(req.params.id).exec()
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function updateOrder(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Order.findByIdAndUpdate(req.params.id, req.body)
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function deleteOrder(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Order.findByIdAndDelete(req.params.id)
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

module.exports = {
    getAllOrders,
    createOrder,
    getOrderById,
    updateOrder,
    deleteOrder,
}