import React, { useState, useEffect } from "react";
import Card from "./Card";

export default (props) => {
  const { stacked, isFaceDown } = props;
  const [faceDown, setFaceDown] = useState(new Set()); //eslint-disable-next-line
  const [forceUpdate, setForceUpdate] = useState(0);

  useEffect(() => {
    if (isFaceDown) {
      props.model.cards.forEach((c) => {
        const { id, suit } = c.model.front;
        faceDown.add(`${id}${suit}`);
      });
      setFaceDown(faceDown);
    }
  }, [isFaceDown, props.model.cards, faceDown]);

  const flip = (rank) => {
    const isFlipped = faceDown.has(rank);
    isFlipped ? faceDown.delete(rank) : faceDown.add(rank);
    setFaceDown(faceDown);
    setForceUpdate(new Date());
  };

  const checkOrientation = (card) => {
    const { id, suit } = card;
    return faceDown.has(`${id}${suit}`);
  };

  return (
    <div className={`deck-container ${stacked ? "stacked" : ""}`}>
      <ol className={`deck`}>
        {props.model.cards.map((c, i) => (
          <li className={`card`} key={`card-${i}`}>
            <Card
              testId={`${props.testId}`}
              model={c.model}
              imagePath={props.imagePath}
              isFaceDown={checkOrientation(c.model.front)}
              onFlip={flip}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
