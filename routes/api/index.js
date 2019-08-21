const router = require("express").Router();
const songRoutes = require("./songs");

// song routes
router.use("/songs", songRoutes);

module.exports = router;
