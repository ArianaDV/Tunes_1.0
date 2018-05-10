const express = require("express");
var bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001;
const app = express();
var mongoose = require("mongoose");
const routes = require("./routes");
var session = require("express-session");
var passport = require("./config/passport");

const socketIO = require('socket.io');
const http = require('http');
var db = require("./models");
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
console.log('change')
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);
// io.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Tunes",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);