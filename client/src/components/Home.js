import { useState, useEffect } from "react";
import TarotCard from "./TarotCard"

function Home(){

    const [tarots, setTarots] = useState([])

    function renderTarot () {
        fetch(('http://localhost:3000/tarot_cards'), {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then((res) => res.json())
        .then((data) => setTarots(data))
    }
    useEffect(renderTarot,[]);

    const cardRender = tarots.map((tarot) => {
        return (
            <TarotCard
                key={tarot.id}
                card_name={tarot.card_name}
                image={tarot.image}
                description={tarot.description} />
        )
      })

    return (
        <div>
            <div className="home-text">
                <div className="home-text-container">
                    <p>“The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.” ― Anais Nin</p>
                </div>
            </div>
            {cardRender}
        </div>
    )
}

export default Home;