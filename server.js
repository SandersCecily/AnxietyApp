const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
// const routes = require("./routes");
// const cors = require('cors');

//connect to mongoose
mongoose.connect("mongodb://localhost/anxietyapp");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//server start
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
