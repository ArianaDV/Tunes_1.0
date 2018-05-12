import React, { Component } from "react";
import './style.css'
import API from "../../utils/API";

class Filter extends Component {
    state = {
        songSearch: '',
        songs: [],
        likes: 1
    }

    componentDidMount(){
    console.log(this);
    this.getSavedSongs();
  }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            songSearch:''
        })

        this.getSavedSongs();
    };      

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
                <form id="form" action="/submit" method="post">
                    <input 
                        placeholder='search song with artist' 
                        value={this.state.songSearch} 
                        onChange={e => this.setState({ songSearch: e.target.value })} 
                    />
                    {/* <input type="submit"/> */}
                    <button onClick={(e) => this.onSubmit(e)}> Submit </button>
                </form>
                <div>
                    <div className="results">
                        <th><h3>Music Choices</h3></th>
                        {this.state.songs.length ? (
                            <div className="form-group">
                                {this.state.songs.map(song => (
                                    // console.log(song.title)  
                                    <ul class="list-group">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            {/* key={song.title} */}
                                            <img />
                                            {song.title}
                                            <br />
                                            by: {song.artist}
                                            <button class="badge badge-primary badge-pill" onClick={this.likeCounter}><i class="fas fa-thumbs-up"></i></button>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        ) : ''}
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;