const path = require("path");
const express = require("express");
const app = express();
const apiRoutes = require("./api");
const Chatkit = require("@pusher/chatkit-server");

// API Routes
 app.use("/api", apiRoutes);

// If no API routes are hit, send the React app
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

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
