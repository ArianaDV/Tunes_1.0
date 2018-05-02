import React, { Component } from "react";
import Form from "../../components/Form/Form";
import Song from "../../components/Song/Song";
import "./style.css";

class Panel extends Component {

    // componentDidMount(){
    //     console.log(this.props);
    // }

    render(){
        return(
            <div className="Panel">
                <Form />
                <Song />                
            </div>
        );
    }
}

export default Panel;