const path = require("path");
const router = require("express").Router();
const remedyController = require("../controllers/remedyController");
const suggestionController = require("../controllers/suggestionController");

// const express = require("express");

// API Route
router.get("/api", remedyController.findAll);

//post
router.post("/", suggestionController.create);

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;