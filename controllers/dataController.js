const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Song
            .find(req.query)
            .then(dbSong => res.json(dbSong))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        const song = {
          _id: req.body._id,
          title: req.body.title,
          artist: req.body.artist
        }
    }    
}