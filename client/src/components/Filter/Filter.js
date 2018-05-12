import React, { Component } from "react";
// import './style.css'

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
        console.log(this.state);
        console.log(this.props);
    };      
    

    render() {
        return (
            <div>
            <div className="row">
            <div className="col-md-8" id="search-field">
            <form method="post" id="form" action="/submit" className="search">
              <input 
                type="text"
                value={this.state.songSearch}
                onChange={e => this.setState({ songSearch: e.target.value })}
                className="textbox" 
                placeholder="Search..."/>
              <input title="Search" value="" type="submit" className="button" onClick={(e) => this.onSubmit(e)}/>
            </form>

            </div>
            </div>
            </div>

            
        );
    }
}

export default Filter;