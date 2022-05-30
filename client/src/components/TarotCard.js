import {useState, useEffect } from "react";

function TarotCard({card_name, image, description}){
    
      return (
      <div className="tarot-list" >
        <div className="card">
          <img className="card-img-top" src={image} alt={card_name}></img>
          <h5 className="card-title">{card_name}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      )
    }

export default TarotCard;