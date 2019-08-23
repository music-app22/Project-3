const router = require("express").Router();
const spotifySongsController = require("../../controllers/spotifySongsController");


// Matches with "/api/spotify-songs/:name"
router
  .route("/")
  .get(spotifySongsController.findRandom)

module.exports = router;
