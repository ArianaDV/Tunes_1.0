import React, { Component } from "react";
import Eric from "./Eric";
import Filter from "./components/Filter";
import Widget from "./components/Widget";




class Antonstyle extends Component {

    render(){
        return(
            <div className="container">
            <h1>this is the playlis page, ya hi.</h1>
            <div className="row">
           {/* <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
               <div className="card1">
                   <h1>content content content content</h1>
               </div>
           </div> */}
           <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
               <div className="card">
                   <h1>content content content content</h1>
                   <Eric/>
               </div>
           </div>
            </div>  
   
            </div>
        );
    }

}
export default Antonstyle;