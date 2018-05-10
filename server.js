var express = require("express");
var bodyParser = require("body-parser")
var PORT = process.env.PORT || 3001;
var app = express();
var mongoose = require("mongoose");
var routes = require("./routes/api/api-routes");
var session = require("express-session");
var passport = require("./config/passport");
var path = require('path');

var db = require("./models");
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname , 'client/build')));
}

app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

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