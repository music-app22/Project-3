const router = require("express").Router();
const songsController = require("../../client/controllers/songsController");

// Matches with "/api/songs"
router.route("/")
  .get(songsController.findAll)
  .post(songsController.create);

// Matches with "/api/songs/:id"
router
  .route("/:id")
    .get(songsController.findById)
    .put(songsController.update)
    .delete(songsController.remove);

module.exports = router;
