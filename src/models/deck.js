import CONSTANTS from "../constants";
import cardFactory from "../factories/card";

export default function deck(type) {
  this.model = {
    type,
    cards: [],
  };
  this.create();
  return this;
}

deck.prototype.create = function create() {
  const suits = Object.keys(CONSTANTS.suits[this.model.type.id]);
  const ranks = CONSTANTS.deck.ranks[this.model.type.id];

  do {
    for (let s = 0; s < suits.length; s++) {
      for (let r = 0; r < ranks.length; r++) {
        let rank = CONSTANTS.card[this.model.type.id][ranks[r]];
        let suit = CONSTANTS.suits[this.model.type.id][suits[s]];
        this.model.cards.push(cardFactory(rank, suit, this.model.type));
      }
    }
  } while (this.size() < CONSTANTS.deck.size[this.type]);
};

deck.prototype.size = function size() {
  return this.model.cards.length;
};

deck.prototype.take = function take(num) {
  return this.model.cards.splice(0, num);
};

deck.prototype.shuffle = function shuffle() {
  const { cards } = this.model;
  let i = cards.length - 1;
  for (i; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
};
