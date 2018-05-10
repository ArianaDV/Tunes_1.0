import React, { Component } from "react";
import API from "../../utils/API";
import './style.css'

class Song extends Component {

  // constructor(props){
  //   super(props);
  //   console.log(this.props, "THESE ARE PROPS")
  // }

  state = {
    songs: [],
    likes: 1
  };

  componentDidMount(){
    console.log(this);
    this.getSavedSongs();
  }

  likeCounter = (e) => {
    // e.preventDefault();
    this.setState({
      likes: this.state.likes + 1
  });
  console.log("liked!");
  {console.log(this.state.likes)}
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

  render(){
    return(
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
                <img/>
                {song.title}
                <br/>
                by: {song.artist}
                  <button class="badge badge-primary badge-pill" onClick={this.likeCounter}><i class="fas fa-thumbs-up"></i></button>
                </li>
              </ul>
            ))}
        </div>
      ): ''}
      </div>
    </div>)
  }

}

export default Song;