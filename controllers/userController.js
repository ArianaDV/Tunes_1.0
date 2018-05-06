const db = require("../models");

module.exports = {
    findOne: function(req, res){
        db.User
            .find(req.query)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        const user = {
          _id: req.body._id,
          username: req.body.username,
          password: req.body.password
        };
        db.User
            .create(user)
            .then(dbUser => res.json(user))
            .catch(err => res.status(422).json(err));
    }    
}