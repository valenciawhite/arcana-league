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
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
            {cardRender}
        </div>
    )
}

export default Home;