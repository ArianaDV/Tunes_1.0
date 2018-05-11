const express = require("express");
var bodyParser = require("body-parser")
const PORT = process.env.PORT || 3001;
const app = express();
var mongoose = require("mongoose");
const routes = require("./routes");
var session = require("express-session");
var passport = require("./config/passport");
var logger = require("morgan");

app.use(logger("dev"));

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

db.Room.create({ name: "Party Room" })
  .then( dbRoom => {
    console.log(dbRoom);
  })
  .catch(err => {
    console.log(err.message);
  });

  //Route for posting songs to database
  app.post("/submit", (req, res) => {
    db.Song.create(req.body)
      .then(dbSong => {
        return db.Room.findOneAndUpdate({}, { $push: { songs: dbSong._id } }, { new: true });
      })
      .then( dbRoom => {
        res.json(dbRoom);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //Route for getting all songs
  app.get("/allSongs", (req, res) => {
    db.Song.find({})
      .then(dbSong => {
        res.json(dbSong);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //Route for getting all rooms
  app.get("/rooms", (req, res) => {
    db.Room.find({})
      .then( dbRoom => {
        res.json(dbRoom);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //Route to see what the Rooms look like populated
  app.get("/populated", (req, res) => {
    db.Room.find({})
      .populate("songs")
      .then(dbRoom => {
        res.json(dbRoom);
      })
      .catch(err => {
        res.json(err);
      });
  });



// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);