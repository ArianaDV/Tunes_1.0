import React, { Component } from "react";
import API from "../../utils/API";


class Song extends Component {

  // constructor(props){
  //   super(props);
  //   console.log(this.props, "THESE ARE PROPS")
  // }

  state = {
    songs: []
  };

  componentDidMount(){
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

  render(){
    return(<div>
      Test
      <div className="panel">
          {this.state.songs.length ? (
            <div>
                  {this.state.songs.map(song => (
                      // console.log(song.title  
                      
                        <ul className="list">
                          
                          {/* key={song.title} */}
                          Title: {song.title} 
                        
                          Artist: {song.artist}
                          </ul>
                      
                  ))}
              </div>
          ): ''}
      </div>
      



    </div>)
  }

}

export default Song;