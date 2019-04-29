const router = require("express").Router();
const suggestionController = require("../../controllers/suggestionController");

// Matches with "/api/remedy"
router
  .post("/", suggestionController.create);


module.exports = router;