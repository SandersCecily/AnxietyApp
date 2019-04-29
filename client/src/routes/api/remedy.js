const router = require("express").Router();
const remedyController = require("../../controllers/remedyController");

// Matches with "/api/remedy"
router
  .get("/", remedyController.findAll);

// Matches with "/api/remedy/:id"

module.exports = router;