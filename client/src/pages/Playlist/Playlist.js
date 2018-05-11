import React, { Component } from "react";
import queryString from 'query-string';
import Filter from "../../components/Filter/Filter";
import axios from 'axios';
import './style.css'


class Playlist extends Component {

    state = {
        field: {},
        filterString: '',
        songData: '',
        songUrl: '',
        songImage: '',
        songArtist: '',
        songID: '',
        user: ''
    }

    onSubmit = field => {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;
        if (!accessToken)
            return;

        this.setState({ field });

        fetch('https://api.spotify.com/v1/search?q=' + field.songSearch + '&type=track', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }).then(response => response.json())
            .then(data => {
                let songData = data.tracks.items[0];
                let songUrl = data.tracks.items[0].external_urls;
                let songImage = songData.album.images[0].url;
                let songArtist = songData.artists[0].name;
                let songID = songData.id;
                console.log('Title: ', songData.name)
                console.log('Artist: ', songArtist)
                console.log('song URL ', songUrl)
                console.log('songImage ', songImage)
                console.log('------------------------------------------------------------------------')


            })
    }


    componentDidMount(){
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;
        if (!accessToken)
            return;

        //This gets the users spotify profile information------------------
        fetch('https://api.spotify.com/v1/me', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                let songID = data.id;
                console.log(songID);
                console.log(this.state)
                this.setState({
                    songID: songID
                })
                console.log(this.state.songID)
            })
        //----------------------------------------------------------------

    }

    render(){
        return(
            <div className="container">
                <h1>Find your jam...</h1>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
                        <div className="card">
                            <h1>Spotify API goes here</h1>
                            <Filter onSubmit={field => this.onSubmit(field)} />
                        </div>
                    </div>
            
                </div>  
   
            </div>

        );
    }
}
export default Playlist;