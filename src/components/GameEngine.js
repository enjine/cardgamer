import React, { Component } from "react";
import Surface from "./Surface";

class GameEngine extends Component {
  state = {
    game: null,
  };

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    e.persist();
    const { games } = this.props;
    const numPlayers = prompt("How many players?");
    if (isNaN(numPlayers) || !numPlayers) {
      alert("Please enter a number!");
      this.onChange(e);
    } else {
      this.setState({
        game: React.createElement(games[e.target.value], {
          numPlayers: Number(numPlayers),
          reset: () => window.location.reload(),
        }),
      });
    }
  };

  render() {
    const { games } = this.props;
    const { game, numPlayers } = this.state;
    return (
      (game && <Surface players={numPlayers}>{game}</Surface>) || (
        <main>
          <select onChange={this.onChange}>
            <option key="null">Select a game to play</option>
            {games.map((g, i) => (
              <option value={i} key={`${g.prototype.constructor.name}`}>
                {g.prototype.constructor.name}
              </option>
            ))}
          </select>
        </main>
      )
    );
  }
}

export default GameEngine;
