const router = require("express").Router();
const songRoutes = require("./songs");
const spotifySongRoutes = require("./spotify-songs");

// song routes
router.use("/songs", songRoutes);
router.use("/spotify-songs", spotifySongRoutes);

module.exports = router;
