const mongo = require('../services/mongoService');

function getAllProducts(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Product.find().exec()
        .then((data) => resolve(res.status(200).json(data)))
        .catch((err) => {
            console.log(err);
            return reject(res.status(500).send(err));
        });
    })
}

function createProduct(req, res, next){
    return new Promise((resolve, reject) => {
        const product = new mongo.Product(req.body);
        product.save()
          .then((data) => resolve(res.status(201).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function getProductById(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Product.findById(req.params.id).exec()
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function updateProduct(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Product.findByIdAndUpdate(req.params.id, req.body)
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function deleteProduct(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Product.findByIdAndDelete(req.params.id)
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
}