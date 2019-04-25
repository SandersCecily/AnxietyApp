const router = require("express").Router();
const remedyRoutes = require("./remedy");
// const suggestionRoutes = require("./suggestion");

// Remedy routes
router.use("/", remedyRoutes);

// Suggestion routes
// router.use("/contact", suggestionRoutes);

module.exports = router;
