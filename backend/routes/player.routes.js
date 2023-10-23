module.exports = app => {
  const players = require("../controllers/player.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new player
  router.post("/", upload.single('file'), players.create);
  
  router.post("/", players.create);

  // Retrieve all players
  router.get("/", players.findAll);

  // Retrieve a single player with id
  router.get("/:id", players.findOne);

  // Update a player with id
  router.put("/:id", players.update);

  // Delete a player with id
  router.delete("/:id", players.delete);

  app.use("/api/players", router);
}