import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Deck from "./Deck";
import CONSTANTS from "../constants";
import deckFactory from "../factories/deck";
import deckModel from "../models/deck";

test("factory creates a standard deck with aces high", () => {
  const type = CONSTANTS.deck.type.STANDARD_ACE_HIGH;
  const deck = deckFactory(type);
  expect(deck).toBeInstanceOf(deckModel);
  expect(deck.size()).toEqual(CONSTANTS.deck.size[type.id]);
  expect(deck.model).toEqual({
    type: {
      id: "STANDARD_ACE_HIGH",
      name: "Standard, Aces High",
    },
    cards: [
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "KING",
            code: "E",
            rank: 13,
            key: "k",
            suit: "CLUBS",
            entity: "&#x1F0DE;",
            glyphs: {
              suit: "♣︎",
            },
            image: "kc.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "QUEEN",
            code: "D",
            rank: 12,
            key: "q",
            suit: "CLUBS",
            entity: "&#x1F0DD;",
            glyphs: {
              suit: "♣︎",
            },
            image: "qc.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "JACK",
            code: "B",
            rank: 11,
            key: "j",
            suit: "CLUBS",
            entity: "&#x1F0DB;",
            glyphs: {
              suit: "♣︎",
            },
            image: "jc.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "TEN",
            code: "A",
            rank: 10,
            key: "10",
            suit: "CLUBS",
            entity: "&#x1F0DA;",
            glyphs: {
              suit: "♣︎",
            },
            image: "10c.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "NINE",
            code: "9",
            rank: 9,
            key: "9",
            suit: "CLUBS",
            entity: "&#x1F0D9;",
            glyphs: {
              suit: "♣︎",
            },
            image: "9c.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "EIGHT",
            code: "8",
            rank: 8,
            key: "8",
            suit: "CLUBS",
            entity: "&#x1F0D8;",
            glyphs: {
              suit: "♣︎",
            },
            image: "8c.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "SEVEN",
            code: "7",
            rank: 7,
            key: "7",
            suit: "CLUBS",
            entity: "&#x1F0D7;",
            glyphs: {
              suit: "♣︎",
            },
            image: "7c.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "SIX",
            code: "6",
            rank: 6,
            key: "6",
            suit: "CLUBS",
            entity: "&#x1F0D6;",
            glyphs: {
              suit: "♣︎",
            },
            image: "6c.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "FIVE",
            code: "5",
            rank: 5,
            key: "5",
            suit: "CLUBS",
            entity: "&#x1F0D5;",
            glyphs: {
              suit: "♣︎",
            },
            image: "5c.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "FOUR",
            code: "4",
            rank: 4,
            key: "4",
            suit: "CLUBS",
            entity: "&#x1F0D4;",
            glyphs: {
              suit: "♣︎",
            },
            image: "4c.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "THREE",
            code: "3",
            rank: 3,
            key: "3",
            suit: "CLUBS",
            entity: "&#x1F0D3;",
            glyphs: {
              suit: "♣︎",
            },
            image: "3c.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "TWO",
            code: "2",
            rank: 2,
            key: "2",
            suit: "CLUBS",
            entity: "&#x1F0D2;",
            glyphs: {
              suit: "♣︎",
            },
            image: "2c.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "ACE",
            code: "1",
            rank: 14,
            key: "1",
            suit: "CLUBS",
            entity: "&#x1F0D1;",
            glyphs: {
              suit: "♣︎",
            },
            image: "1c.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "KING",
            code: "E",
            rank: 13,
            key: "k",
            suit: "SPADES",
            entity: "&#x1F0AE;",
            glyphs: {
              suit: "♠︎",
            },
            image: "ks.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "QUEEN",
            code: "D",
            rank: 12,
            key: "q",
            suit: "SPADES",
            entity: "&#x1F0AD;",
            glyphs: {
              suit: "♠︎",
            },
            image: "qs.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "JACK",
            code: "B",
            rank: 11,
            key: "j",
            suit: "SPADES",
            entity: "&#x1F0AB;",
            glyphs: {
              suit: "♠︎",
            },
            image: "js.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "TEN",
            code: "A",
            rank: 10,
            key: "10",
            suit: "SPADES",
            entity: "&#x1F0AA;",
            glyphs: {
              suit: "♠︎",
            },
            image: "10s.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "NINE",
            code: "9",
            rank: 9,
            key: "9",
            suit: "SPADES",
            entity: "&#x1F0A9;",
            glyphs: {
              suit: "♠︎",
            },
            image: "9s.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "EIGHT",
            code: "8",
            rank: 8,
            key: "8",
            suit: "SPADES",
            entity: "&#x1F0A8;",
            glyphs: {
              suit: "♠︎",
            },
            image: "8s.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "SEVEN",
            code: "7",
            rank: 7,
            key: "7",
            suit: "SPADES",
            entity: "&#x1F0A7;",
            glyphs: {
              suit: "♠︎",
            },
            image: "7s.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "SIX",
            code: "6",
            rank: 6,
            key: "6",
            suit: "SPADES",
            entity: "&#x1F0A6;",
            glyphs: {
              suit: "♠︎",
            },
            image: "6s.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "FIVE",
            code: "5",
            rank: 5,
            key: "5",
            suit: "SPADES",
            entity: "&#x1F0A5;",
            glyphs: {
              suit: "♠︎",
            },
            image: "5s.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "FOUR",
            code: "4",
            rank: 4,
            key: "4",
            suit: "SPADES",
            entity: "&#x1F0A4;",
            glyphs: {
              suit: "♠︎",
            },
            image: "4s.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "THREE",
            code: "3",
            rank: 3,
            key: "3",
            suit: "SPADES",
            entity: "&#x1F0A3;",
            glyphs: {
              suit: "♠︎",
            },
            image: "3s.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "TWO",
            code: "2",
            rank: 2,
            key: "2",
            suit: "SPADES",
            entity: "&#x1F0A2;",
            glyphs: {
              suit: "♠︎",
              card: "🂢",
            },
            image: "2s.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "ACE",
            code: "1",
            rank: 14,
            key: "1",
            suit: "SPADES",
            entity: "&#x1F0A1;",
            glyphs: {
              suit: "♠︎",
              card: "🂡",
            },
            image: "1s.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "KING",
            code: "E",
            rank: 13,
            key: "k",
            suit: "HEARTS",
            entity: "&#x1F0BE;",
            glyphs: {
              suit: "♥︎",
            },
            image: "kh.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "QUEEN",
            code: "D",
            rank: 12,
            key: "q",
            suit: "HEARTS",
            entity: "&#x1F0BD;",
            glyphs: {
              suit: "♥︎",
            },
            image: "qh.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "JACK",
            code: "B",
            rank: 11,
            key: "j",
            suit: "HEARTS",
            entity: "&#x1F0BB;",
            glyphs: {
              suit: "♥︎",
            },
            image: "jh.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "TEN",
            code: "A",
            rank: 10,
            key: "10",
            suit: "HEARTS",
            entity: "&#x1F0BA;",
            glyphs: {
              suit: "♥︎",
            },
            image: "10h.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "NINE",
            code: "9",
            rank: 9,
            key: "9",
            suit: "HEARTS",
            entity: "&#x1F0B9;",
            glyphs: {
              suit: "♥︎",
            },
            image: "9h.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "EIGHT",
            code: "8",
            rank: 8,
            key: "8",
            suit: "HEARTS",
            entity: "&#x1F0B8;",
            glyphs: {
              suit: "♥︎",
            },
            image: "8h.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "SEVEN",
            code: "7",
            rank: 7,
            key: "7",
            suit: "HEARTS",
            entity: "&#x1F0B7;",
            glyphs: {
              suit: "♥︎",
            },
            image: "7h.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "SIX",
            code: "6",
            rank: 6,
            key: "6",
            suit: "HEARTS",
            entity: "&#x1F0B6;",
            glyphs: {
              suit: "♥︎",
            },
            image: "6h.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "FIVE",
            code: "5",
            rank: 5,
            key: "5",
            suit: "HEARTS",
            entity: "&#x1F0B5;",
            glyphs: {
              suit: "♥︎",
            },
            image: "5h.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "FOUR",
            code: "4",
            rank: 4,
            key: "4",
            suit: "HEARTS",
            entity: "&#x1F0B4;",
            glyphs: {
              suit: "♥︎",
            },
            image: "4h.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "THREE",
            code: "3",
            rank: 3,
            key: "3",
            suit: "HEARTS",
            entity: "&#x1F0B3;",
            glyphs: {
              suit: "♥︎",
            },
            image: "3h.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "TWO",
            code: "2",
            rank: 2,
            key: "2",
            suit: "HEARTS",
            entity: "&#x1F0B2;",
            glyphs: {
              suit: "♥︎",
            },
            image: "2h.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "ACE",
            code: "1",
            rank: 14,
            key: "1",
            suit: "HEARTS",
            entity: "&#x1F0B1;",
            glyphs: {
              suit: "♥︎",
            },
            image: "1h.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "KING",
            code: "E",
            rank: 13,
            key: "k",
            suit: "DIAMONDS",
            entity: "&#x1F0CE;",
            glyphs: {
              suit: "♦︎",
            },
            image: "kd.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "QUEEN",
            code: "D",
            rank: 12,
            key: "q",
            suit: "DIAMONDS",
            entity: "&#x1F0CD;",
            glyphs: {
              suit: "♦︎",
            },
            image: "qd.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "JACK",
            code: "B",
            rank: 11,
            key: "j",
            suit: "DIAMONDS",
            entity: "&#x1F0CB;",
            glyphs: {
              suit: "♦︎",
            },
            image: "jd.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "TEN",
            code: "A",
            rank: 10,
            key: "10",
            suit: "DIAMONDS",
            entity: "&#x1F0CA;",
            glyphs: {
              suit: "♦︎",
            },
            image: "10d.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "NINE",
            code: "9",
            rank: 9,
            key: "9",
            suit: "DIAMONDS",
            entity: "&#x1F0C9;",
            glyphs: {
              suit: "♦︎",
            },
            image: "9d.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "EIGHT",
            code: "8",
            rank: 8,
            key: "8",
            suit: "DIAMONDS",
            entity: "&#x1F0C8;",
            glyphs: {
              suit: "♦︎",
            },
            image: "8d.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "SEVEN",
            code: "7",
            rank: 7,
            key: "7",
            suit: "DIAMONDS",
            entity: "&#x1F0C7;",
            glyphs: {
              suit: "♦︎",
            },
            image: "7d.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "SIX",
            code: "6",
            rank: 6,
            key: "6",
            suit: "DIAMONDS",
            entity: "&#x1F0C6;",
            glyphs: {
              suit: "♦︎",
            },
            image: "6d.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "FIVE",
            code: "5",
            rank: 5,
            key: "5",
            suit: "DIAMONDS",
            entity: "&#x1F0C5;",
            glyphs: {
              suit: "♦︎",
            },
            image: "5d.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "FOUR",
            code: "4",
            rank: 4,
            key: "4",
            suit: "DIAMONDS",
            entity: "&#x1F0C4;",
            glyphs: {
              suit: "♦︎",
            },
            image: "4d.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "THREE",
            code: "3",
            rank: 3,
            key: "3",
            suit: "DIAMONDS",
            entity: "&#x1F0C3;",
            glyphs: {
              suit: "♦︎",
            },
            image: "3d.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "TWO",
            code: "2",
            rank: 2,
            key: "2",
            suit: "DIAMONDS",
            entity: "&#x1F0C2;",
            glyphs: {
              suit: "♦︎",
            },
            image: "2d.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
      {
        model: {
          type: "STANDARD_ACE_HIGH",
          front: {
            id: "ACE",
            code: "1",
            rank: 14,
            key: "1",
            suit: "DIAMONDS",
            entity: "&#x1F0C1;",
            glyphs: {
              suit: "♦︎",
            },
            image: "1d.svg",
          },
          back: {
            entity: "&#x1F0A0",
            glyphs: {
              suit: null,
              card: "🂠",
            },
            image: "back.svg",
          },
        },
      },
    ],
  });
});

test("renders a deck with the cards face down", () => {
  const deck = deckFactory(CONSTANTS.deck.STANDARD_ACE_HIGH);
  const { getAllByTestId } = render(
    <Deck
      model={deck.model}
      isFaceDown={true}
      imagePath={`/images/cards/standard`}
      testId={`deck-face-down`}
    />
  );
  expect(getAllByTestId("deck-face-down")[0]).toHaveAttribute(
    "src",
    "/images/cards/standard/back.svg"
  );
});
