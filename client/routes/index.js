const path = require("path");
const router = require("express").Router();
const remedyController = require("../controllers/remedyController");

// const express = require("express");

// API Routes
// router.use("/api", apiRoutes);
router.get("/api", remedyController.findAll);

//post
router.post("/")

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;