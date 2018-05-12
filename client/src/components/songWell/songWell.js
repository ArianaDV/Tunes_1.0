import React, { Component } from "react";
import './style.css'
import axios from 'axios';


class SongWell extends Component {
    
    state = {
        songID: '',
        axioData: '',
        songArray: []
    }


    render() {
    
    let textFont = {
        'font-family': 'Skranji',
        'float': 'left;',
        'display': 'inline;',
        'padding-right': '400px;'
    }

    // let wrap = {
    //     'box-sizing': 'border-box;',
    //     'width': '960px;',
    //     'height': '2000px;',
    //     'padding': '30px;',
    //     'border': '2px solid blacl;',
                
    //     'background-color': '#CBE6A5;',
    //     'background - image': '-webkit - linear - gradient(top, #CBE6A5, #E2F1CD);',
    //     'background - image': '-moz - linear - gradient(top, #CBE6A5, #E2F1CD);',
    //     'background - image': 'linear - gradient(top, #CBE6A5, #E2F1CD);',
    //     'overflow': 'auto;'

    // }
        let E = this.props.songProp;

    console.log(this.props.songProp);

        return (
            <div className="box">
            
                <wrapper className='w3-container w3-teal'>
                        <img src= {E.image}
                            style={{
                                width: '130px',
                                float: 'left'
                            }}
                        />
                        
                        <h4 style ={textFont}>
                            Artist: {E.artist}
                        </h4>
                        <h4 style={textFont}>
                            Song: {E.title}
                        </h4>
                </wrapper> 
            </div>
        );
    }
}

export default SongWell;