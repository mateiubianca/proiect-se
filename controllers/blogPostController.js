const mongo = require('../services/mongoService');

function getAllPosts(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.BlogPost.find().exec()
        .then((data) => resolve(res.status(200).json(data)))
        .catch((err) => {
            console.log(err);
            return reject(res.status(500).send(err));
        });
    })
}

function createPost(req, res, next){
    return new Promise((resolve, reject) => {
        const post = new mongo.BlogPost(req.body);
        post.save()
          .then((data) => resolve(res.status(201).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function getPostById(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.BlogPost.findById(req.params.id).exec()
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function updatePost(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.BlogPost.findByIdAndUpdate(req.params.id, req.body)
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function deletePost(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.BlogPost.findByIdAndDelete(req.params.id)
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

module.exports = {
    getAllPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost,
}