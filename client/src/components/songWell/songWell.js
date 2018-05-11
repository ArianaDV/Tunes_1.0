import React, { Component } from "react";
import './style.css'
import axios from 'axios';

class SongWell extends Component {
    
    



    render() {

        axios
            .get("/api/songs/")
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log("error is ", error);
            });

        return (
            <div>
                Hello
            </div>
        );
    }
}

export default SongWell;