import React, { Component } from "react";
import Search from "../../components/Search/Search";
import Song from "../../components/Song/Song";
import "./style.css";

class Panel extends Component {

    // componentDidMount(){
    //     console.log(this.props);
    // }

    render(){
        return(
            <div className="Panel">
                <Search />
                {/* <Song />                 */}
            </div>
        );
    }
}

export default Panel;