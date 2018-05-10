import axios from "axios";


export default {
    getSongs: function(params){
        return axios.get("/api/spot", {params});
    },
    getSavedSongs: function(){
        return axios.get("/api/songs");
    },
    search: function(){
        return axios.get("/api/spotify")
    }
};