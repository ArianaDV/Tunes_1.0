import React, { Component } from "react";

class Playlist extends Component {

    render(){
        return(
            <div className="container">
            <h1>Find your jam...</h1>
            <form method="get" action="?">
            <input type="text" placeholder="Search" />
            <ul class="suggestions"></ul>
            <button type="submit">
            <i class="fa fa-search"></i>
            </button>
            </form>
            <div className="row">
           <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
               <div className="card">
                   <h1>Spotify API goes here</h1>
               </div>
           </div>
           <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
               <Panel />
           </div>
            </div>  
   
            </div>

        );
    }
}
export default Playlist;