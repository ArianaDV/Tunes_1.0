const router = require("express").Router();
const dataController = require("../../controllers/spotifyController");

router
  .route("/")
  .get(dataController.fetchID)

  module.exports = router;

  