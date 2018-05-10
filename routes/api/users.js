const router = require("express").Router();
const dataController = require("../../controllers/userController");

// Matches with "/api/songs"
router.route("/")
  .get(dataController.findOne)
  .post(dataController.create);

// Matches with "/api/songs/:id"
// router
//   .route("/:id")
// //   .get(Controller.findById)
// //   .put(articleController.update)
// //   .delete(articleController.remove);

module.exports = router;
