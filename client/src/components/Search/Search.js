import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

const Search = props => (
    <form>
      <div className="form-group">
        <input
          className="form-control"
          id="query"
          type="text"
          value={props.query}
          placeholder="Search for a song"
          name="query"
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={this.Search}
          type="submit"
          className="btn btn-lg btn-danger"
        >
          Submit
        </button>
      </div>
    </form>
  );
  
  export default Search;