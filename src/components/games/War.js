import React from "react";
import Game from "./Game";
import CONSTANTS from "../../constants";
import Deck from "../Deck";
import Player from "../Player";

const DECK_TYPE = CONSTANTS.deck.type.STANDARD_ACE_HIGH;

export default class War extends Game {
  static defaultProps = {
    rules: {
      deckType: DECK_TYPE.id,
      deckSize: CONSTANTS.deck.size[DECK_TYPE.id],
      maxPlayers: 2,
    },
  };

  constructor(props) {
    super(props);
    this.shuffle = this.shuffle.bind(this);
    this.deal = this.deal.bind(this);
    this.build = this.build.bind(this);
    this.playHand = this.playHand.bind(this);
    this.changeLayout = this.changeLayout.bind(this);
  }

  componentDidMount() {
    const {
      rules: { maxPlayers },
      numPlayers,
      reset,
    } = this.props;
    if (numPlayers > maxPlayers) {
      alert(
        `Sorry, a maximum of ${maxPlayers} players are allowed for ${this.constructor.name}`
      );
      reset();
    } else {
      super.componentDidMount();
      this.setState({
        players: this.generatePlayers(numPlayers),
        hands: {},
        victories: {},
        battles: [],
      });
    }
  }

  build() {
    this.state = {
      deck: this.deckFactory(DECK_TYPE),
      isStacked: true,
      isFaceDown: true,
    };
  }

  shuffle(cb) {
    const { deck } = this.state;
    deck.shuffle();
    this.setState(
      {
        isShuffled: true,
        deck,
      },
      cb
    );
  }

  deal() {
    const { players, deck, isShuffled } = this.state;
    if (!isShuffled) {
      const shouldShuffle = window.confirm(
        `Whoops! You forgot to shuffle the deck. Would you like me take care of that for you?`
      );
      return (
        shouldShuffle &&
        this.shuffle(() => {
          alert("The deck has been shuffled. You are welcome.");
          this.deal();
        })
      );
    }
    do {
      players.forEach((p) => {
        p.hand = p.hand.concat(deck.take(1));
      });
    } while (deck.size() > 0);
    this.setState({
      isDealt: true,
      deck,
    });
  }

  playHand() {
    const { players, battles } = this.state;
    const player1Hand = players[0].hand;
    const player2Hand = players[1].hand;

    //take the top card from each hand
    const [p1Card] = player1Hand.splice(-1, 1);
    const [p2Card] = player2Hand.splice(-1, 1);
    //compare the ranks

    if (p1Card.model.front.rank > p2Card.model.front.rank) {
      players[0].victories.push(p1Card, p2Card, ...battles);
      players[0].hand = player1Hand;
    } else if (p1Card.model.front.rank === p2Card.model.front.rank) {
      players[0].hand = player1Hand;
      players[1].hand = player2Hand;
      battles.push(p1Card, p2Card);
      return this.setState({
        isWar: true,
        players,
        battles,
      });
    } else {
      players[1].victories.push(p1Card, p2Card, ...battles);
      players[1].hand = player2Hand;
    }

    let winner = null;
    if (players[0].hand.length === 0 && players[1].hand.length === 0) {
      if (players[0].victories.length > players[1].victories.length) {
        winner = players[0];
      } else {
        winner = players[1];
      }
    }

    this.setState({
      isWar: false,
      players,
      battles: [],
      winner,
    });
  }

  changeLayout() {
    this.setState((prevState) => ({
      isStacked: !Boolean(prevState.isStacked),
    }));
  }

  render() {
    const {
      deck: { model },
      isDealt,
      isWar,
      isStacked,
      isFaceDown,
      players,
      battles,
      winner,
    } = this.state;
    const { numPlayers, reset } = this.props;

    return (
      <div className={`game ${this.constructor.name}`}>
        <h1>{`It's a game of ${this.constructor.name} for ${numPlayers} players!`}</h1>
        {isWar && (
          <div>
            <h1 style={{ color: "red", fontSize: "5rem" }}>IT'S WAR!!</h1>
            <Deck
              model={{ cards: battles }}
              imagePath={`/images/cards/standard`}
              stacked={false}
              isFaceDown={false}
            />
          </div>
        )}
        {winner && <h1>{winner.name.toUpperCase()} IS THE VICTOR!</h1>}
        <fieldset>
          <legend>Players</legend>
          {isDealt && !winner && (
            <button onClick={this.playHand}>PLAY HAND</button>
          )}
          {winner && <button onClick={reset}>PLAY AGAIN</button>}
          <div className="players">
            {players &&
              players.map((p) => (
                <Player
                  key={`player-${p.number}-${p.name}`}
                  number={p.number}
                  name={p.name}
                  hand={p.hand}
                  victories={p.victories}
                />
              ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Dealer</legend>
          <button onClick={reset}>RESET</button>
          <button onClick={this.shuffle}>SHUFFLE</button>
          <button onClick={this.deal}>DEAL</button>
          <button onClick={this.changeLayout}>
            {isStacked ? "UNSTACK" : "STACK"}
          </button>
        </fieldset>
        {
          <Deck
            model={model}
            imagePath={`/images/cards/standard`}
            stacked={isStacked}
            isFaceDown={isFaceDown}
          />
        }
      </div>
    );
  }
}
