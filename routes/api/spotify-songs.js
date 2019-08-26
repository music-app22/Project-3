const router = require("express").Router();
const spotifySongsController = require("../../client/controllers/spotifySongsController");

router
  .route("/")
  .get(spotifySongsController.findRandom);

  // Matches with "/api/spotify-songs/:track",
  router
  .route("/:track")
  .get(spotifySongsController.playSelection);
  
module.exports = router;
