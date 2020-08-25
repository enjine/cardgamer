import React from "react";
import { render } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";
import CONSTANTS from "../constants";
import cardFactory from "../factories/card";
import cardModel from "../models/card";

test("factory creates a card model", () => {
  const card = cardFactory(
    CONSTANTS.card.STANDARD_ACE_HIGH.ACE,
    CONSTANTS.suits.STANDARD_ACE_HIGH.SPADES
  );
  expect(card).toBeInstanceOf(cardModel);
  expect(card.model).toEqual({
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
  });
});

test("renders a card face down", () => {
  const card = cardFactory(
    CONSTANTS.card.STANDARD_ACE_HIGH.ACE,
    CONSTANTS.suits.STANDARD_ACE_HIGH.SPADES
  );
  const { getByTestId } = render(
    <Card
      model={card.model}
      isFaceDown={true}
      imagePath={`/images/cards/standard`}
    />
  );
  expect(getByTestId("card-back")).toHaveAttribute(
    "src",
    "/images/cards/standard/back.svg"
  );
});

test("renders the queen of hearts face up", () => {
  const card = cardFactory(
    CONSTANTS.card.STANDARD_ACE_HIGH.QUEEN,
    CONSTANTS.suits.STANDARD_ACE_HIGH.HEARTS
  );
  const { getByTestId } = render(
    <Card model={card.model} imagePath={`/images/cards/standard`} />
  );
  expect(getByTestId("card-front")).toHaveAttribute(
    "src",
    "/images/cards/standard/qh.svg"
  );
});

test("renders the 7 of clubs face up", () => {
  const card = cardFactory(
    CONSTANTS.card.STANDARD_ACE_HIGH.SEVEN,
    CONSTANTS.suits.STANDARD_ACE_HIGH.CLUBS
  );
  const { getByTestId } = render(
    <Card model={card.model} imagePath={`/images/cards/standard`} />
  );
  expect(getByTestId("card-front")).toHaveAttribute(
    "src",
    "/images/cards/standard/7c.svg"
  );
});

test("renders the Joker face up", () => {
  const card = cardFactory(
    CONSTANTS.card.STANDARD_ACE_HIGH_WITH_JOKERS.JOKER,
    CONSTANTS.suits.STANDARD_ACE_HIGH_WITH_JOKERS.JOKER,
    CONSTANTS.deck.type.STANDARD_ACE_HIGH_WITH_JOKERS
  );
  const { getByTestId } = render(
    <Card model={card.model} imagePath={`/images/cards/standard`} />
  );
  expect(getByTestId("card-front")).toHaveAttribute(
    "src",
    "/images/cards/standard/jokerj.svg"
  );
});
