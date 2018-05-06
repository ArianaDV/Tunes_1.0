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
        res.send({ redirect: "/login" });
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
      });
  });

  router.get('/current_user', function(req,res) {
    if (req.user) {
      res.json({'logged_in': true });
    } else {
      res.json({ 'logged_in': false });
    }
  });

  // Route for logging user out
  router.get("/logout", function (req, res) {
    req.logout();
    res.send({redirect: '/'});
  });


module.exports = router;