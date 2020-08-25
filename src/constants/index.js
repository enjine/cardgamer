const STANDARD_SUITS = {
  CLUBS: {
    id: "CLUBS",
    name: "Clubs",
  },
  SPADES: {
    id: "SPADES",
    name: "Spades",
  },
  HEARTS: {
    id: "HEARTS",
    name: "Hearts",
  },
  DIAMONDS: {
    id: "DIAMONDS",
    name: "Diamonds",
  },
};

const STANDARD_SUITS_WITH_JOKERS = Object.assign({}, STANDARD_SUITS, {
  JOKER: {
    id: "JOKER",
    name: "Joker",
  },
});

const STANDARD_ICONS = {
  CLUBS: {
    code: "&#x1F0D",
    glyph: "♣︎",
  },
  SPADES: {
    code: "&#x1F0A",
    glyph: "♠︎",
  },
  HEARTS: {
    code: "&#x1F0B",
    glyph: "♥︎",
  },
  DIAMONDS: {
    code: "&#x1F0C",
    glyph: "♦︎",
  },
  JOKER: {
    code: "&#x1F0C",
    glyph: "J",
  },
};

const STANDARD_RANKS = [
  "KING",
  "QUEEN",
  "JACK",
  "TEN",
  "NINE",
  "EIGHT",
  "SEVEN",
  "SIX",
  "FIVE",
  "FOUR",
  "THREE",
  "TWO",
  "ACE",
];

const STANDARD_RANKS_WITH_JOKERS = [
  "JOKER",
  "JOKER",
  "KING",
  "QUEEN",
  "JACK",
  "TEN",
  "NINE",
  "EIGHT",
  "SEVEN",
  "SIX",
  "FIVE",
  "FOUR",
  "THREE",
  "TWO",
  "ACE",
];

export default {
  suits: {
    STANDARD_ACE_HIGH: STANDARD_SUITS,
    STANDARD_ACE_LOW: STANDARD_SUITS,
    STANDARD_ACE_HIGH_WITH_JOKERS: STANDARD_SUITS_WITH_JOKERS,
    STANDARD_ACE_LOW_WITH_JOKERS: STANDARD_SUITS_WITH_JOKERS,
  },
  icons: {
    STANDARD_ACE_HIGH: STANDARD_ICONS,
    STANDARD_ACE_LOW: STANDARD_ICONS,
    STANDARD_ACE_HIGH_WITH_JOKERS: STANDARD_ICONS,
    STANDARD_ACE_LOW_WITH_JOKERS: STANDARD_ICONS,
    BACK: {
      code: "&#x1F0A0",
      glyph: "🂠",
      html:
        '<mark class="unicode" title="U+1F0A0: PLAYING CARD BACK" data-char-info="U+1F0A0: PLAYING CARD BACK">🂠</mark>',
    },
  },
  card: {
    STANDARD_ACE_HIGH: {
      KING: { id: "KING", code: "E", rank: 13, key: "k" },
      QUEEN: { id: "QUEEN", code: "D", rank: 12, key: "q" },
      JACK: { id: "JACK", code: "B", rank: 11, key: "j" },
      TEN: { id: "TEN", code: "A", rank: 10, key: "10" },
      NINE: { id: "NINE", code: "9", rank: 9, key: "9" },
      EIGHT: { id: "EIGHT", code: "8", rank: 8, key: "8" },
      SEVEN: { id: "SEVEN", code: "7", rank: 7, key: "7" },
      SIX: { id: "SIX", code: "6", rank: 6, key: "6" },
      FIVE: { id: "FIVE", code: "5", rank: 5, key: "5" },
      FOUR: { id: "FOUR", code: "4", rank: 4, key: "4" },
      THREE: { id: "THREE", code: "3", rank: 3, key: "3" },
      TWO: { id: "TWO", code: "2", rank: 2, key: "2" },
      ACE: { id: "ACE", code: "1", rank: 14, key: "1" },
    },
    STANDARD_ACE_LOW: {
      KING: { id: "KING", code: "E", rank: 13, key: "k" },
      QUEEN: { id: "QUEEN", code: "D", rank: 12, key: "q" },
      JACK: { id: "JACK", code: "B", rank: 11, key: "j" },
      TEN: { id: "TEN", code: "A", rank: 10, key: "10" },
      NINE: { id: "NINE", code: "9", rank: 9, key: "9" },
      EIGHT: { id: "EIGHT", code: "8", rank: 8, key: "8" },
      SEVEN: { id: "SEVEN", code: "7", rank: 7, key: "7" },
      SIX: { id: "SIX", code: "6", rank: 6, key: "6" },
      FIVE: { id: "FIVE", code: "5", rank: 5, key: "5" },
      FOUR: { id: "FOUR", code: "4", rank: 4, key: "4" },
      THREE: { id: "THREE", code: "3", rank: 3, key: "3" },
      TWO: { id: "TWO", code: "2", rank: 2, key: "2" },
      ACE: { id: "ACE", code: "1", rank: 1, key: "1" },
    },
    STANDARD_ACE_HIGH_WITH_JOKERS: {
      JOKER: { id: "JOKER", code: "F", rank: null, key: "joker" },
      KING: { id: "KING", code: "E", rank: 13, key: "k" },
      QUEEN: { id: "QUEEN", code: "D", rank: 12, key: "q" },
      JACK: { id: "JACK", code: "B", rank: 11, key: "j" },
      TEN: { id: "TEN", code: "A", rank: 10, key: "10" },
      NINE: { id: "NINE", code: "9", rank: 9, key: "9" },
      EIGHT: { id: "EIGHT", code: "8", rank: 8, key: "8" },
      SEVEN: { id: "SEVEN", code: "7", rank: 7, key: "7" },
      SIX: { id: "SIX", code: "6", rank: 6, key: "6" },
      FIVE: { id: "FIVE", code: "5", rank: 5, key: "5" },
      FOUR: { id: "FOUR", code: "4", rank: 4, key: "4" },
      THREE: { id: "THREE", code: "3", rank: 3, key: "3" },
      TWO: { id: "TWO", code: "2", rank: 2, key: "2" },
      ACE: { id: "ACE", code: "1", rank: 14, key: "1" },
    },
    STANDARD_ACE_LOW_WITH_JOKERS: {
      JOKER: { id: "JOKER", code: "F", rank: null, key: "joker" },
      KING: { id: "KING", code: "E", rank: 13, key: "k" },
      QUEEN: { id: "QUEEN", code: "D", rank: 12, key: "q" },
      JACK: { id: "JACK", code: "B", rank: 11, key: "j" },
      TEN: { id: "TEN", code: "A", rank: 10, key: "10" },
      NINE: { id: "NINE", code: "9", rank: 9, key: "9" },
      EIGHT: { id: "EIGHT", code: "8", rank: 8, key: "8" },
      SEVEN: { id: "SEVEN", code: "7", rank: 7, key: "7" },
      SIX: { id: "SIX", code: "6", rank: 6, key: "6" },
      FIVE: { id: "FIVE", code: "5", rank: 5, key: "5" },
      FOUR: { id: "FOUR", code: "4", rank: 4, key: "4" },
      THREE: { id: "THREE", code: "3", rank: 3, key: "3" },
      TWO: { id: "TWO", code: "2", rank: 2, key: "2" },
      ACE: { id: "ACE", code: "1", rank: 1, key: "1" },
    },
  },
  deck: {
    type: {
      STANDARD_ACE_HIGH: {
        id: "STANDARD_ACE_HIGH",
        name: "Standard, Aces High",
      },
      STANDARD_ACE_LOW: {
        id: "STANDARD_ACE_LOW",
        name: "Standard, Aces Low",
      },
      STANDARD_ACE_HIGH_WITH_JOKERS: {
        id: "STANDARD_ACE_HIGH_WITH_JOKERS",
        name: "Standard, Aces High w/Jokers",
      },
      STANDARD_ACE_LOW_WITH_JOKERS: {
        id: "STANDARD_ACE_HIGH_WITH_JOKERS",
        name: "Standard, Aces High w/Jokers",
      },
    },
    size: {
      STANDARD_ACE_HIGH: 52,
      STANDARD_ACE_LOW: 52,
      STANDARD_ACE_HIGH_WITH_JOKERS: 54,
      STANDARD_ACE_LOW_WITH_JOKERS: 54,
    },
    ranks: {
      STANDARD_ACE_HIGH: STANDARD_RANKS,
      STANDARD_ACE_LOW: STANDARD_RANKS,
      STANDARD_ACE_HIGH_WITH_JOKERS: STANDARD_RANKS_WITH_JOKERS,
      STANDARD_ACE_LOW_WITH_JOKERS: STANDARD_RANKS_WITH_JOKERS,
    },
  },
  entities: {
    "&#x1F0A0;": "🂠",
    "&#x1F0A1;": "🂡",
    "&#x1F0A2;": "🂢",
  },
};
