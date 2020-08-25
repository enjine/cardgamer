import CONSTANTS from "../constants";

export default function card(rank, suit, deck) {
  const entity = `${CONSTANTS.icons[deck][suit].code}${
    CONSTANTS.card[deck][rank.id].code
  };`;
  this.model = {
    type: deck,
    front: {
      ...rank,
      suit,
      entity,
      glyphs: {
        suit: CONSTANTS.icons[deck][suit].glyph,
        card: CONSTANTS.entities[entity],
      },
      image: `${rank.key}${suit.substring(0, 1).toLowerCase()}.svg`,
    },
    back: {
      entity: CONSTANTS.icons.BACK.code,
      glyphs: {
        suit: null,
        card: CONSTANTS.icons.BACK.glyph,
      },
      image: `back.svg`,
    },
  };
  return this;
}

card.prototype.front = function front() {
  return this.model.front;
};

card.prototype.back = function back() {
  return this.model.back;
};
