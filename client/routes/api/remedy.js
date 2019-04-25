const router = require("express").Router();
const remedyController = require("../../controllers/remedyController");

// Matches with "/api/remedy"
router
  .get("/", remedyController.findAll)
  .post("/", remedyController.create);

// Matches with "/api/remedy/:id"

module.exports = router;