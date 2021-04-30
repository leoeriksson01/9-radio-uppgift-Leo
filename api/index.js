const express = require("express");
const session = require("express-session");
const path = require("path");

const userRoutes = require("./routes/userRoutes");
const channelRoutes = require("./routes/channelRoutes.js");
const port = 3001;

const app = express();

app.use(express.json());

app.use(
  session({
    // The secret is required and it is used to sign the session ID cookie. Can either be a string or an array of strings. This should be extacted to its own file, it could be a json-file and it should also be gitignored.
    secret: "The Phantom Menace",
    // resave forces the session to be saved back to the session store, even if the session was never modified during the request.
    resave: false,
    // saveUninitialized forces the session to be saved to the store. A session is uninitialized when it is new but not modified
    saveUninitialized: true,
    // Settings object for the session ID cookie, there are many settings you can do, most of the are not required, see the docs for more info. We only need the secure-option in this case. We set this to "auto" in order to enable epress-session to automatically match the determined security of the connection.
    cookie: { secure: "auto" },
  })
);

app.use("/api/v1/channels", channelRoutes);
app.use("/api/v1/category", channelRoutes);

app.use("/api/v1", channelRoutes);
app.use("/api/v1/user", userRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
