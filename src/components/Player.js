import React from "react";
import Deck from "./Deck";

const Player = (props) => {
  //eslint-disable-next-line
  const { number, name, hand, victories, isStacked, isFaceDown } = props;
  const handModel = {
    cards: hand,
  };

  const victoriesModel = {
    cards: victories,
  };

  return (
    <div className="player" key={`player-${number}`}>
      <h1>{`${name}`}</h1>
      <div>
        <aside className="hands">
          {
            <Deck
              model={handModel}
              imagePath={`/images/cards/standard`}
              stacked={true}
              isFaceDown={true}
            />
          }
        </aside>
        <aside className="victories">
          <h3>VICTORIES</h3>
          {
            <Deck
              model={victoriesModel}
              imagePath={`/images/cards/standard`}
              stacked={false}
              isFaceDown={false}
            />
          }
        </aside>
      </div>
    </div>
  );
};

export default Player;
