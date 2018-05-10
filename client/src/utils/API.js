import axios from "axios";
// import filterParams from "./filterParams";

export default {
    getSongs: function(params){
        return axios.get("/api/spot", {params});
    },
    getSavedSongs: function(){
        return axios.get("/api/songs");
    }
};