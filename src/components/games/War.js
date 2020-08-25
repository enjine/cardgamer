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
      minPlayers: 1,
      maxPlayers: 2,
      requiredPlayers: 2,
    },
  };

  constructor(props) {
    super(props);
    this.shuffle = this.shuffle.bind(this);
    this.deal = this.deal.bind(this);
    this.build = this.build.bind(this);
    this.playHand = this.playHand.bind(this);
    this.autoPlay = this.autoPlay.bind(this);
    this.resumePlay = this.resumePlay.bind(this);
    this.changeLayout = this.changeLayout.bind(this);
  }

  componentDidMount() {
    const {
      rules: { maxPlayers, minPlayers, requiredPlayers },
      numPlayers,
      reset,
    } = this.props;
    if (numPlayers < minPlayers || numPlayers > maxPlayers) {
      alert(
        `Sorry, at least ${minPlayers} and no more than ${maxPlayers} players are required for ${this.constructor.name}`
      );
      reset();
    } else {
      super.componentDidMount();
      const players = this.generatePlayers(numPlayers);
      // generate a computer opponent if players < required
      if (players.length < requiredPlayers) {
        players.push(this.playerFactory(players.length + 1, "CPU"));
      }
      this.setState({
        players,
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

  shuffle(e, cb = () => {}) {
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
        this.shuffle(null, () => {
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

  autoPlay() {
    const { isDealt } = this.state;
    if (!isDealt) {
      this.deal();
    }
    const autoPlayId = setInterval(this.playHand, 250);
    this.setState({ autoPlayId });
  }

  resumePlay() {
    const { autoPlayId } = this.state;
    autoPlayId && clearInterval(autoPlayId);
    this.setState({ autoPlayId: null });
  }

  playHand() {
    const { deckSize } = this.props.rules;
    const { players, battles, autoPlayId } = this.state;

    if (this.state.winner && autoPlayId) {
      clearInterval(autoPlayId);
    }

    const player1Hand = players[0].hand;
    const player2Hand = players[1].hand;

    //take the top card from each hand
    const [p1Card] = player1Hand.splice(-1, 1);
    const [p2Card] = player2Hand.splice(-1, 1);
    console.log("got cards", p1Card, p2Card, players);
    //compare the ranks
    if (p1Card && p2Card) {
      if (p1Card.model.front.rank > p2Card.model.front.rank) {
        players[0].victories += battles.length + 2;
        player1Hand.push(p1Card, p2Card, ...battles);
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
        players[1].victories += battles.length + 2;
        player2Hand.push(p1Card, p2Card, ...battles);
        players[1].hand = player2Hand;
      }
    } else {
      console.error("WHY NO CARDS?", players);
    }

    console.log(players, players[0].hand.length, players[1].hand.length);

    let winner = null;
    if (players[0].hand.length === deckSize) {
      winner = players[0];
    } else if (players[1].hand.length === deckSize) {
      winner = players[1];
    }

    if (winner) {
      clearInterval(autoPlayId);
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
      autoPlayId,
    } = this.state;
    const { numPlayers, reset } = this.props;

    return (
      <div className={`game ${this.constructor.name}`}>
        <h1>{`It's a game of ${this.constructor.name} for ${numPlayers} players!`}</h1>
        {winner && <h1>{winner.name.toUpperCase()} IS THE VICTOR!</h1>}
        <fieldset>
          <legend>Players</legend>
          {isDealt && !winner && !autoPlayId && (
            <button onClick={this.playHand}>PLAY HAND</button>
          )}
          {isDealt && !winner && autoPlayId && (
            <button onClick={this.resumePlay}>STOP AUTOPLAY</button>
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
        </fieldset>
        <fieldset>
          <legend>Dealer</legend>
          <button onClick={reset}>RESET</button>
          <button onClick={this.shuffle}>SHUFFLE</button>
          <button onClick={this.deal}>DEAL</button>
          <button onClick={this.autoPlay}>AUTO-PLAY</button>
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
