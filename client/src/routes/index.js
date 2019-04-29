const path = require("path");
// const router = require("express").Router();
const express = require("express");
const app = express();
const apiRoutes = require("./api");

// API Routes
 app.use("/api", apiRoutes);

// If no API routes are hit, send the React app
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

