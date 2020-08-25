import React, { Component } from "react";
import deckFactory from "../../factories/deck";
import playerFactory from "../../factories/player";

export default class Game extends Component {
  static defaultProps = {
    numPlayers: 0,
    rules: {},
  };

  state = {
    ready: false,
    deck: null,
  };

  constructor(props) {
    super(props);
    this.deckFactory = deckFactory;
    this.playerFactory = playerFactory;
    this.build();
  }

  componentDidMount() {
    const { numPlayers } = this.props;
    const { deck } = this.state;
    if (numPlayers > 0 && deck.size()) {
      this.setState({
        ready: true,
      });
    }
  }

  generatePlayers(numPlayers) {
    const players = [];
    let i = 1;
    do {
      const name = prompt(`What is player ${i}'s name?`);
      if (!name) {
        alert(`Please enter a name for Player ${i}`);
        return this.generatePlayers(numPlayers);
      }
      players.push(this.playerFactory(i, name));
      i++;
    } while (i <= numPlayers);
    return players;
  }

  build() {
    const { rules } = this.props;
    if (!rules.deckSize) {
      throw new Error("Unable to build game without rules!");
    }
  }

  render() {
    if (!this.state.ready) {
      throw new Error(`${this.constructor.name} is not ready to play!`);
    }
    return <h1>No Game Chosen</h1>;
  }
}
