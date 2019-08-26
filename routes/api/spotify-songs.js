const router = require("express").Router();
const spotifySongsController = require("../../client/controllers/spotifySongsController");


// Matches with "/api/spotify-songs/:id"
router
  .route("/")
  .get(spotifySongsController.findRandom)

module.exports = router;
