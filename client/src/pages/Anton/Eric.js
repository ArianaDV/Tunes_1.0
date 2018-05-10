import React, { Component } from 'react';
//import 'reset-css/reset.css';
import './Eric.css';
import queryString from 'query-string';
import PlaylistCounter from "./components/PlaylistCounter";
import HoursCounter from "./components/HoursCounter";
import Filter from "./components/Filter";
import Playlist from "./components/Playlist";
import { deepStrictEqual } from 'assert';


class Eric extends Component {
    
    state = {
        field: {},
        filterString: '',
        songData: '',
        songUrl: '',
        songImage: '',
        songArtist: '',
        songID: ''
    }

    onSubmit = field => {
        console.log('Eric comp got: ', field.songSearch);
        let accessToken = 'BQDhEWUYpJHjdGLOUDN3NpgQTQlz29j5MtBrIOjheCThQUODC-wBF0QcaN2yr1tGMQGm4VpBBtKJKJSUmAaaO9emjw5_sA-TvxC9B374PZTpnAeEdxmnawKlRB1ziibbQjfwLw7VEL0VreQ2fWuPjwjyjgRYLs-mGl2fHV9xh6tmcI_BSwbwB1SP0hlBeBMDESokqhGSDZdBQEM-WeBmXrO9bc8m3GY';
        this.setState({ field });
        console.log(this.state);

            fetch('https://api.spotify.com/v1/search?q=' + field.songSearch + '&type=track', {
                headers: { 'Authorization': 'Bearer ' + accessToken }
            }).then(response => response.json())
                .then(data => {
                    let songData = data.tracks.items[0];
                    let songUrl = data.tracks.items[0].external_urls;
                    let songImage = songData.album.images[0].url;
                    let songArtist = songData.artists[0].name;
                    let songID = songData.id;
                    console.log('song URL ',songUrl)
                    console.log('songImage ', songImage)
                })
    };
    
    componentDidMount() {
        let parsed = queryString.parse(window.location.search);
        let accessToken = parsed.access_token;
        // let songSearch = 'Lose Yourself Eminem';
        if (!accessToken)
            return;   
        

        // fetch('https://api.spotify.com/v1/search?q=' + this.state.field.songSearch + '&type=track', {
        //     headers: { 'Authorization': 'Bearer ' + accessToken }
        // }).then(response => response.json())
        //     .then(data => {
        //         // let songData = data.tracks.items[0];
        //         // let songUrl = data.tracks.items[0].external_urls;
        //         // let songImage = songData.album.images[0].url;
        //         // let songArtist = songData.artists[0].name;
        //         // let songID = songData.id;
        //        // console.log(JSON.stringify(this.state))
        //     })



        fetch('https://api.spotify.com/v1/me', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                let songID = data.id;
                console.log(songID);
                this.setState({
                    songID: songID
                })
            })


        fetch('https://api.spotify.com/v1/me', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }).then(response => response.json())
            .then(data => {
                //console.log(data.id);
                this.setState({
                    user: {
                        name: data.display_name
                    }

                })
            })

        fetch('https://api.spotify.com/v1/me/playlists', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        }).then(response => response.json())
            .then(playlistData => {
                let playlists = playlistData.items
                let trackDataPromises = playlists.map(playlist => {
                    let responsePromise = fetch(playlist.tracks.href, {
                        headers: { 'Authorization': 'Bearer ' + accessToken }
                    })
                    let trackDataPromise = responsePromise
                        .then(response => response.json())
                    return trackDataPromise
                })
                let allTracksDataPromises =
                    Promise.all(trackDataPromises)
                let playlistsPromise = allTracksDataPromises.then(trackDatas => {
                    trackDatas.forEach((trackData, i) => {
                        playlists[i].trackDatas = trackData.items
                            .map(item => item.track)
                            .map(trackData => ({
                                name: trackData.name,
                                duration: (trackData.duration_ms / 1000)
                            }))
                    })
                    return playlists
                })
                return playlistsPromise
            })
            .then(playlists => this.setState({
                playlists: playlists.map(item => {
                    return {
                        name: item.name,
                        imageUrl: item.images[0].url,
                        songs: item.trackDatas.slice(0, 3)
                    }
                })
            }))

    }


    render() {
        let playlistToRender =
            this.state.user &&
                this.state.playlists
                ? this.state.playlists.filter(playlist => {
                    let matchesPlaylist = playlist.name.toLowerCase().includes(
                        this.state.filterString.toLowerCase())
                    let matchesSong = playlist.songs.find(song => song.name.toLowerCase()
                        .includes(this.state.filterString.toLowerCase()))
                    return matchesPlaylist || matchesSong
                }) : []
        return (
            <div className='App'>
                {this.state.user ?
                    <div>
                        <h1>
                            {this.state.user.name}'s Playlists
          </h1>
                        <PlaylistCounter playlists={playlistToRender} />
                        <HoursCounter playlists={playlistToRender} />
                        <Filter onSubmit={field => this.onSubmit(field) }/>
                        {playlistToRender.map((playlist, i) =>
                            <Playlist playlist={playlist} index={i} />
                        )}
                    </div> : <button onClick={() => {
                        true// window.location= window.location.href.includes('localhost')''
                            ? window.location.replace("https://murmuring-shore-84467.herokuapp.com/login")  // 'http://localhost:8888/login'
                            : 'error'
                    }
                    }
                        style={{ padding: "20px", 'font-size': '50px', 'margin-top': '20px' }}>Sign in with Spotify</button>
                }
            </div>
        );
    }
}

export default Eric;
