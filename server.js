const express = require("express");
const app = express();
// const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./client/routes");
const cors = require("cors");

app.use(cors());

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/anxietyapp");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  

//server start
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/build"));
}

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
