import {useState, useEffect } from "react";
import ReadMore from "./ReadMore";

function TarotCard({card_name, image, description}){
  const [readMore, setReadMore] = useState(false)

  function handleClick(){
    console.log("hello");
  }
    
      return (
      <div className="tarot-list" >
        <div className="card">
          <img className="card-img-top" src={image} alt={card_name}></img>
          <h5 className="card-title">{card_name}</h5>
          <ReadMore>
            {description}
          </ReadMore>
        </div>
      </div>
      )
    }

export default TarotCard;