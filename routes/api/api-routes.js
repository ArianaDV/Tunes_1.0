// importing package and setting up router
const express = require("express");
const router = new express.Router();

// Requiring our models and passport as we've configured it
var db = require("../../models");
var passport = require("../../config/passport");

  router.post("/api/login", passport.authenticate("local", { failureRedirect: '/login' }), function (req, res) {
    res.send({ redirect: '/playlist' });
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
      artist: req.body.artist,
      url: req.body.url,
      image: req.body.image,
      likes: req.body.likes
    })
      .then(function () {
        //res.send({ redirect: '/playlist' });
        res.send({});
        console.log('im here')
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  });


module.exports = router;