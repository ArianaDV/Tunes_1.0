import React, { Component } from "react";
import queryString from 'query-string';
import Filter from "../../components/Filter/Filter";
import axios from 'axios';
import './style.css'
import SongWell from "../../components/SongWell/SongWell";

class Playlist extends Component {

    // state = {
    //     field: {},
    //     filterString: '',
    //     title: '',
    //     artist: '',
    //     url: '',
    //     image: '',
    //     likes: 0,
    //     order: '',
    //     newWell: true,
    //     songArray: [],
    //     songID: '',
    //     axioData: ''
    // }

    constructor(props){
        super(props);

        this.state = {
            field: {},
            filterString: '',
            title: '',
            artist: '',
            url: '',
            image: '',
            likes: 0,
            order: '',
            newWell: true,
            songArray: [],
            songID: '',
            axioData: ''
        }

        // let array = this.state.axioData;

    }


  changeState = nada => {
      this.setState({ newWell: false });
  }


    onSubmitEE = field => {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;
        if (!accessToken)
            return;

        console.log(this.state.field);
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
                        image: songImage,
                        songID: songID
                    })
                    .then(response => {
                        console.log('it worked');
                        console.log(response.config.data)
                    })
                    .catch(error => {
                        console.log("error is: ", error);
                    });

                    this.setState({
                        title: songData.name,
                        artist: songArtist,
                        url: songUrl,
                        image: songImage,
                        newWell: false,
                        songID: songID
                    })

                    console.log(this.state);
                    this.state.songArray.push(this.state);
                    console.log(this.state.songArray);

                axios
                    .get("/api/songs/")
                    .then(response => {
                        console.log(response.data);
                        this.setState({ axioData: response.data });
                        console.log(this.state.axioData)
                    })
                    .catch(error => {
                        console.log("error is ", error);
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
            }).then(songID => {
                fetch('https://api.spotify.com/v1/users/' + '12129895622' + '/playlists',{
                    headers: { 'Authorization' : 'Bearer ' + accessToken },
                    method: 'post',
                    body: 
                        JSON.stringify({
                        "name": "Party Room Playlist",
                        "description": "New playlist description",
                        "public": false}) 
                }).then(response => {
                    return response.json();
                    response.send({ redirect: 'https://open.spotify.com/collection/playlists' });
                }).then(data => {
                    console.log(data);
                    console.log('SUCCESSFUL');
                });
            });
        //----------------------------------------------------------------


    }

    render(){
        let song = '';
        let newOrder = '';

        let songToRender =
            this.state.axioData 
            ? song = this.state.axioData
            : []
        
        let reOrder =
            this.state.axioData
            ? newOrder = this.state.axioData
            : []
          
        return(

            <div id='hello'>
            <h3>Find your favorite song...</h3>
            
               <form method="post">
            <Filter onSubmit={field => this.onSubmitEE(field)} />
              {
                songToRender.map((info, i) => 
                <SongWell songProp={info} index={i}/>)
             }
              </form>
            </div>

        );
    }
}

export default Playlist;