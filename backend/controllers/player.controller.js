const db = require("../models");
const Player = db.players;
const Op = db.Sequelize.Op;

// Create and Save a new player
exports.create = (req, res) => {
  // Validate request
  if (!req.body.brand || !req.body.model){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Player
  const player = {
    brand: req.body.brand,
    model: req.body.model,
    filename: req.file ? req.file.filename : ""
  }

  // Save Player in the database
  Player.create(player).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the player"
    })
  });
};

// Retrieve all players from the database.
exports.findAll = (req, res) => {
  Player.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all players"
    })
  })
};

// Find a single player with an id
exports.findOne = (req, res) => {

}

// Update a player by the id in the request
exports.update = (req, res) => {

};

// Delete a player with the specified id in the request
exports.delete = (req, res) => {

};
