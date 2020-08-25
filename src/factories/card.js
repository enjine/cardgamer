import card from "../models/card";
import CONSTANTS from "../constants";

const { STANDARD_ACE_HIGH } = CONSTANTS.deck.type;

export default function cardFactory(rank, suit, deck = STANDARD_ACE_HIGH) {
  return new card(rank, suit.id, deck.id);
}
