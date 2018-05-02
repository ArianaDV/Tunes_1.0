import React, { Component } from "react";
import "./style.css";

const Form = props => (
    <form>
      <div className="form-group">
        <input
          className="form-control"
          id="query"
          type="text"
          value={props.query}
          placeholder="Search for a song"
          name="query"
          onChange={props.handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={props.handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger"
        >
          Submit
        </button>
      </div>
    </form>
  );
  
  export default Form;