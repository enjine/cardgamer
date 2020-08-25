import React from "react";
import { render } from "@testing-library/react";
import GameEngine from "./components/GameEngine";
import games from "./components/games";

test("renders game selector", () => {
  const { getByText } = render(<GameEngine games={games} />);
  const selectElement = getByText(/Select a game to play/i);
  expect(selectElement).toBeInTheDocument();
});
