import deck from "../models/deck";
import CONSTANTS from "../constants";

const { STANDARD_ACE_HIGH } = CONSTANTS.deck.type;

export default function deckFactory(type = STANDARD_ACE_HIGH) {
  return new deck(type);
}
