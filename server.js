const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./client/routes");

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true } || "mongodb://localhost/anxietyapp");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//server start
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
