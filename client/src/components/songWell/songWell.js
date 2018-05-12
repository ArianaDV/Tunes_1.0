import React, { Component } from "react";
import './style.css'
import axios from 'axios';
import API from "../../utils/API";

class SongWell extends Component {
   
    state = {
        songs: [],
        likes: 1
    };

    componentDidMount() {
        console.log(this);
        this.getSavedSongs();
    }

    getSavedSongs = () => {
        API.getSavedSongs()
            .then(res =>
                this.setState({
                    songs: res.data
                })
            )
            // .then(console.log(API.getSavedSongs()))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                help
                {console.log(this.state.songs)}
            </div>
        );
    }
}

export default SongWell;