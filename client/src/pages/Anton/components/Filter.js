import React, { Component } from "react";

class Filter extends Component {
    state = {
        songSearch: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            songSearch:''
        })
        //console.log(this.state);
    };      
    

    render() {
        return (
            <div>
                <form id="form" action="/submit" method="post">
                    <input 
                        placeholder='search song with artist' 
                        value={this.state.songSearch} 
                        onChange={e => this.setState({ songSearch: e.target.value })} 
                    />
                    <input type="submit"/>
                    <button onClick={(e) => this.onSubmit(e)}> Submit </button>
                </form>
            </div>
        );
    }
}

export default Filter;