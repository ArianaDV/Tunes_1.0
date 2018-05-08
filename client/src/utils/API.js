import axios from "axios";
// import filterParams from "./filterParams";

const spotifyURL = 'https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx';

var keys = {
    id: 'a20742a380c94395ab40a887325d857f',
    secret: '3d5603460a1346f6852f8ba0e72f1716'
  };


export default {
    getSongs: function(params){
        return axios.get("/api/spot", {params});
    },
    getSavedSongs: function(){
        return axios.get("/api/songs");
    }
};