const router = require("express").Router();
const songRoutes = require("./songs");
const userRoutes = require("./users");


// NYT routes
router.use("/songs", songRoutes);
router.use("/users", userRoutes);



module.exports = router;