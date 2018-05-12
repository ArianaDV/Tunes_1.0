import React, { Component } from "react";
import queryString from 'query-string';
import Filter from "../../components/Filter/Filter";
import axios from 'axios';
import './style.css'
import SongWell from "../../components/songWell/songWell";


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
                let songUrl = data.tracks.items[0].external_urls.spotify;
                let songImage = songData.album.images[0].url;
                let songArtist = songData.artists[0].name;
                let songID = songData.id;
                console.log('Title: ', songData.name)
                console.log('Artist: ', songArtist)
                console.log('song URL ', songUrl)
                console.log('songImage ', songImage)
                console.log('------------------------------------------------------------------------')

                axios
                    .post("/api/songs", {
                        title: songData.name,
                        artist: songArtist,
                        url: songUrl,
                        image: songImage
                    })
                    .then(response => {
                        console.log('it worked');
                        console.log(response.data)
                    })
                    .catch(error => {
                        console.log("error is: ", error);
                    });

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
            <div>
            <h3>Find your favorite song...</h3>
            <div className="row">
            <div className="col-md-8" id="search-field">
            <form method="post">
              <input type="text" className="textbox" placeholder="Search..."/>
              <input title="Search" value="" type="submit" className="button"/>
            </form>
            </div>
            </div>
            </div>
        );
    }
}

export default Playlist;