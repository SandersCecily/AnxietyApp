const express = require("express");
const app = express();
// const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const routes = require("./client/routes");
const Chatkit = require("@pusher/chatkit-server");
const cors = require("cors");


app.use(cors());
const chatkit = new Chatkit.default({
    instanceLocator: "v1:us1:5e63b8ba-6245-4e8e-b012-620880114b6c",
    key: "b878e0fb-c8ac-4a9f-aea7-3088eb200f74:tA5pvBcxNCciDzGgNrFImNPoBprWusSzNkXZ76pxFGg=",
});
app.post("/users", (req, res) => {
    const { username } = req.body
    chatkit
        .createUser({
            id: username,
            name: username
        })
        .then(() => res.sendStatus(201))
        .catch(error => {
            if (error.error === "services/chatkit/user_already_exists") {
                res.sendStatus(200)
            } else {
                res.status(error.status).json(error)
            }
        })
});

app.post("/authenticate", (req, res) => {
    const {grant_type} = req.body;
    res.json(chatkit.authenticate({grant_type, userId: req.query.user_id}));
});

//connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/anxietyapp");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//server start
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});
