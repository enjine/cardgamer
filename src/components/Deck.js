import React, { useState, useEffect, useCallback } from "react";
import Card from "./Card";

export default (props) => {
  const {
    stacked,
    isFaceDown,
    model: { cards },
  } = props;
  const [faceDown, setFaceDown] = useState(new Set()); //eslint-disable-next-line
  const [forceUpdate, setForceUpdate] = useState();

  const flip = useCallback(
    (rank) => {
      const isFlipped = faceDown.has(rank);
      isFlipped ? faceDown.delete(rank) : faceDown.add(rank);
      setFaceDown(faceDown);
      setForceUpdate(new Date());
    },
    [faceDown]
  );

  const checkOrientation = ({ id, suit }) => {
    return faceDown.has(`${id}${suit}`);
  };

  useEffect(() => {
    if (isFaceDown) {
      cards.forEach(
        ({
          model: {
            front: { id, suit },
          },
        }) => {
          flip(`${id}${suit}`);
        }
      );
    }
  }, [cards, flip, isFaceDown, faceDown]);

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
