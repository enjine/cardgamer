import React, { Component } from "react";

export default class Card extends Component {
  state = {};

  constructor(props) {
    super(props);
    const { isFaceDown } = props;

    this.state = {
      isFaceDown: Boolean(isFaceDown),
      isDiscarded: false,
    };

    this.flip = this.flip.bind(this);
  }

  flip() {
    const {
      model: {
        front: { id, suit },
      },
      onFlip,
    } = this.props;
    onFlip(`${id}${suit}`);
  }

  discard() {
    this.setState({
      isDiscarded: true,
    });
  }

  render() {
    const { model, imagePath, testId, isFaceDown } = this.props; // eslint-disable-next-line
    const { id, code, key, rank, suit, glyphs, entity, image } = model.front;
    return (
      <figure
        className={`${id} ${suit}`}
        onClick={this.flip}
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
  }
}
