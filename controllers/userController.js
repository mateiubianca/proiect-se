const mongo = require('../services/mongoService');

function getAllUsers(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.User.find().exec()
        .then((data) => resolve(res.status(200).json(data)))
        .catch((err) => {
            console.log(err);
            return reject(res.status(500).send(err));
        });
    })
}

function createUser(req, res, next){
    return new Promise((resolve, reject) => {
        const user = new mongo.User(req.body);
        user.save()
          .then((data) => resolve(res.status(201).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function getUserById(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.User.findById(req.params.id).exec()
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function updateUser(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.User.findByIdAndUpdate(req.params.id, req.body)
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

function deleteUser(req, res, next){
    return new Promise((resolve, reject) => {
        mongo.User.findByIdAndDelete(req.params.id)
          .then((data) => resolve(res.status(200).json(data)))
          .catch((err) => {
            console.log(err);
            return reject(res.status(500).send());
          });
      })
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
}