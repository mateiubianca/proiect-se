const mongo = require('../services/mongoService');

function getAllReviews(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Review.find().exec()
        .then((data) => resolve(res.status(200).json(data)))
        .catch((err) => {
            console.log(err);
            return reject(res.status(500).send(err));
        });
    })
}

function createReview(req, res, next){
    return new Promise((resolve, reject) => {
        const review = new mongo.Review(req.body);
        review.save()
          .then((data) => resolve(res.status(201).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function getReviewById(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Review.findById(req.params.id).exec()
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function updateReview(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Review.findByIdAndUpdate(req.params.id, req.body)
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function deleteReview(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Review.findByIdAndDelete(req.params.id)
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

module.exports = {
    getAllReviews,
    createReview,
    getReviewById,
    updateReview,
    deleteReview,
}