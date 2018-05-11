var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var roomSchema = new Schema({
    name: {
        type: String,
        unique: true
    },

    songs: [
        {
            type: Schema.Types.ObjectId,
            ref: "Song"
        }
    ]
});

var Room = mongoose.model("Room", roomSchema);

module.exports = Room;