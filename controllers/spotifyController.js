const axios = require("axios");
const db = require("../models");
const Spotify = require('node-spotify-api');


module.exports ={
fetchID:function (ID){
    axios.get('https://api.spotify.com/v1/track', {
          headers: { 'Authorization': 'Bearer ' + accessToken }
        }).then(response => response.json())
          .then(data => {
            console.log(data);
            let testVariable = data.id;
            console.log(testVariable);
            return testVariable;
          })
    }

}