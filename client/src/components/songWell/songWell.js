import React, { Component } from "react";
import './style.css'
import axios from 'axios';

class SongWell extends Component {
    
    state = {
        title: '',
        artist: '',
        url: '',
        image: '',
        likes: ''
    } 

    hellp = () =>{
        sadflk 
        sdalfj
    }


    render() {

        axios
            .get("/api/songs/")
            .then(response => {
                console.log(response.data);
                let api = response.data;
                this.setState({
                    title: '',
                    artist: '',
                    url: '',
                    image: '',
                    likes: ''
                })
                
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