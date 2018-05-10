import React, { Component } from "react";
import "./style.css";
var songSearch = "1cTZMwcBJT0Ka3UJPXOeeN";

class Container extends Component {
    render(){
        return(
            <div className="Container">
                <iframe src={"https://open.spotify.com/embed?uri=spotify:track:"+ songSearch} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        );
    }
}

export default Container;