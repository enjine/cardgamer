import React from "react";

export const Card = (props) => {
  const { model, imagePath, testId, isFaceDown } = props;
  const { id, code, key, rank, suit, entity, image } = model.front;

  const flip = () => {
    const {
      model: {
        front: { id, suit },
      },
      onFlip,
    } = props;
    onFlip(`${id}${suit}`);
  };

  return (
    <figure
      className={`${id} ${suit}`}
      onClick={flip}
      entity={entity}
      key={key}
      code={code}
      rank={rank}
    >
      {!isFaceDown ? (
        <div className={`front`}>
          <mark>
            <img
              data-testid={testId ? `${testId}` : "card-front"}
              alt={`${id} OF ${suit}`}
              src={`${imagePath}/${image}`}
            />
          </mark>
        </div>
      ) : (
        <div className="back">
          <mark>
            <img
              data-testid={testId ? `${testId}` : "card-back"}
              alt={`BACK`}
              src={`${imagePath}/${model.back.image}`}
            />
          </mark>
        </div>
      )}
    </figure>
  );
};

export default Card;
