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

            <h3>Find your favorite song...</h3>
            <div className="row">
            <div className="col-md-8" id="search-field">
            <form method="post" id="form" action="/submit">
              <input 
                type="text"
                value={this.state.songSearch}
                onChange={e => this.setState({ songSearch: e.target.value })}
                className="textbox" 
                placeholder="Search..."/>
              <input title="Search" value="" type="submit" className="button" onClick={(e) => this.onSubmit(e)}/>
            </form>

                <form id="form" action="/submit" method="post">
                    <input 
                        placeholder='search song with artist' 
                        value={this.state.songSearch} 
                        onChange={e => this.setState({ songSearch: e.target.value })} 
                    />
                    {/* <input type="submit"/> */}
                    <button onClick={(e) => this.onSubmit(e)} > Submit </button>
                </form>

            </div>
            </div>
            </div>

            
        );
    }
}

export default Filter;