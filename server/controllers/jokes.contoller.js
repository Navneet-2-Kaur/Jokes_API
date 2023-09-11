// 1 import the model
const joke = require("../models/jokes.model");

// Server test: 

module.exports.apiTest = (req, res) => {
  res.json({ message: "Server is working!" });
};

// 2 export all functions with placeholder 

  // get all jokes function
module.exports.allJokes = (req, res) => {
  joke.find()
  .then((jokeList) => res.json(jokeList))
  .catch((err) => res.json(err));
};

  // get one joke function
module.exports.oneJokes = (req, res) => {
  joke.findOne({_id : req.params.id})
  .then((oneJoke) => res.json(oneJoke))
  .catch((err) => res.json(err));
};








  // create one joke function
module.exports.createJokes = (req, res) => {
  joke.create(req.body)
  .then((newJoke) => res.json(newJoke))
  .catch((err) => res.json(err));
};










// update one joke function
module.exports.updateJokes = (req, res) => {
  joke.findOneAndUpdate({ _id : req.params.id}, req.body, {
    new: true,
    runValidators: true,
  })
  .then((updatedJoke) => res.json(updatedJoke))
  .catch((err) => res.json(err));
};

// delete one joke function
module.exports.deleteJokes = (req, res) => {
  joke.deleteOne({ _id: req.params.id })
  .then((status) => res.json(status))
  .catch((err) => res.json(err));
};



