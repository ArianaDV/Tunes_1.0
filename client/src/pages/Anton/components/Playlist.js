import React, { Component } from "react";

class Playlist extends Component {
    render() {
        let playlist = this.props.playlist;
        return (
            <div>
                <img src={playlist.imageUrl} style={{ width: '90px' }} />
                <h3>{playlist.name}</h3>
                <ul style={{ 'margin-top': '10px', 'font-weight': 'normal' }}>
                    {this.props.playlist.songs.map(song =>
                        <li style={{ 'padding-top': '2px' }}>{song.name}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Playlist;