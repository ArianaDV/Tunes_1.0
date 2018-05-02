import React, { Component } from "react";
import "./style.css";

class Container extends Component {
    render(){
        return(
            <div className="Container">
                <div className="spotify">
                  <iframe src="https://open.spotify.com/embed?uri=spotify:album:1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              </div>
            </div>
        );
    }
}

export default Container;