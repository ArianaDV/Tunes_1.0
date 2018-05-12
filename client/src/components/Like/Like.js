import React, { Component } from "react";
import './style.css'
import axios from 'axios';


class Like extends Component {

    render() {


        return (
            <div>
                <button 
                    type="button" 
                    className="btn btn-default"
                >Like
                </button>
            </div>
        );
    }
}

export default Like;