const router = require("express").Router();
const suggestionController = require("../../controllers/suggestionController");

router
  .post("/", suggestionController.create);

module.exports = router;