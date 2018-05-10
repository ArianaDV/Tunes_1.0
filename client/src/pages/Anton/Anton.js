import React, { Component } from "react";
import Eric from "./Eric";
import Filter from "./components/Filter";




class Antonstyle extends Component {

    render(){
        return(
            <div className="container">
            <h1>this is the playlis page, ya hi.</h1>
            <form method="get" action="?">
                    
            <ul class="suggestions"></ul>
            {/* <button type="submit">
            <i class="fa fa-search"></i>
            </button> */}
            </form>
            <div className="row">
           <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
               <div className="card">
                   <h1>content content content content</h1>
                   
               </div>
           </div>
           <div className="col-sm-12 col-md-6 col-lg-6 mt-4">
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