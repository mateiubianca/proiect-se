const mongo = require('../services/mongoService');

function getAllComments(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Comment.find().exec()
        .then((data) => resolve(res.status(200).json(data)))
        .catch((err) => {
            console.log(err);
            return reject(res.status(500).send(err));
        });
    })
}

function createComment(req, res, next){
    return new Promise((resolve, reject) => {
        const comm = new mongo.Comment(req.body);
        comm.save()
          .then((data) => resolve(res.status(201).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function getCommentById(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Comment.findById(req.params.id).exec()
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function updateComment(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Comment.findByIdAndUpdate(req.params.id, req.body)
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function deleteComment(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.Comment.findByIdAndDelete(req.params.id)
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

module.exports = {
    getAllComments,
    createComment,
    getCommentById,
    updateComment,
    deleteComment,
}