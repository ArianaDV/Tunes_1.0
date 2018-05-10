// importing package and setting up router
const express = require("express");
const router = new express.Router();

// Requiring our models and passport as we've configured it
var db = require("../../models");
var passport = require("../../config/passport");

  router.post("/api/login", passport.authenticate("local", { failureRedirect: '/login' }), function (req, res) {
    res.send({ redirect: '/playlist' });
  });

  router.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(function () {
        res.send({ redirect: '/playlist' });
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  });

  router.get('/current_user', function(req,res) {
    if (req.user) {
      res.json({'logged_in': true });
    } else {
      res.json({ 'logged_in': false });
    }
  });

  router.get('/api/songs', function(req,res) {
    db.Song
            .find(req.query)
            .then(dbSong => res.json(dbSong))
            .catch(err => res.status(422).json(err));
  });

  router.post("/api/songs", function (req, res) {
    console.log(req.body);
    db.Song.create({
      _id: req.body._id,
          title: req.body.title,
          artist: req.body.artist
    })
      .then(function () {
        res.send({ redirect: '/playlist' });
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  });

  router.get("/api/spotify", function(){
    return spotify.search({ type: 'track', query: songSearch, limit: 1}, function (err, data){
      if (err) {
      //if songSearch = "", make songSearch = "The Sign"
      return console.log('Error occurred: ' + err);
        }
        else{
        console.log(data.tracks.items[0].artists[0].name);
      console.log(data.tracks.items[0].name);
      console.log(data.tracks.items[0].album.external_urls.spotify);
      console.log(data.tracks.items[0].album.name);
      console.log(data.tracks.items[0].album.images[0]);
  }
});
  })

  // Route for logging user out
  router.get("/logout", function (req, res) {
    req.logout();
    res.send({redirect: '/'});
  });


module.exports = router;