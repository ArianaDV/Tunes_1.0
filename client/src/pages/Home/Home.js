import React, { Component } from "react";
import { Link } from "react-router-dom";


class Home extends Component {

    render(){
        return(
        <div>
        <h2>WELCOME</h2>

        <div className="fade"></div>
        <section className="star-wars">

        <div className="crawl">
          <div className="title">
            <p>Episode IV</p>
            <h1>A New Hope</h1>
          </div>
          <p>DRAKE Childish Gambino Rich the KID Playboi Carti Famous DEX Wiz Khalifa Gucci Mane Swae Lee Rae Sremmurd Desiigner  Migos Nicki Minaj Murda Beetz Belly Lil Xan Lil Yachty Kanye West</p>     
          <p>Charlie Puth Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p>
          <p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…</p>
        </div>
      </section>
        </div>
        
        )
    }

}
export default Home;