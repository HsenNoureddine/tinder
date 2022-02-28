import React, { useEffect, useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios.js";

function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/tinder/cards");
      console.log(request.data);
      setPeople(request.data);
    }

    fetchData();
  }, []);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((character) => (
          <TinderCard
            className="swipe"
            key={character.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{
                backgroundImage: `url(${character.imgUrl})`,
                backgroundRepeat: "no-repeat",
                color: "red",
              }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
