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
    this.checkWinner = this.checkWinner.bind(this);
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
    const autoPlayId = setInterval(this.playHand, 3);
    this.setState({ autoPlayId });
  }

  resumePlay() {
    const { autoPlayId } = this.state;
    autoPlayId && clearInterval(autoPlayId);
    this.setState({ autoPlayId: null });
  }

  canPlayHand(p1Hand, p2Hand, numCards) {
    return p1Hand.length >= numCards && p2Hand.length >= numCards;
  }

  playHand() {
    const { deckSize } = this.props.rules;
    const { players, battles, isWar } = this.state;

    const numCardsToPlay = isWar ? 4 : 1;

    const player1Hand = players[0].hand;
    const player2Hand = players[1].hand;

    if (this.canPlayHand(player1Hand, player2Hand, numCardsToPlay)) {
      const p1Card = player1Hand.splice(-1, numCardsToPlay).pop();
      const p2Card = player2Hand.splice(-1, numCardsToPlay).pop();

      if (p1Card.model.front.rank > p2Card.model.front.rank) {
        players[0].victories += battles.length + 2;
        player1Hand.push(p1Card, p2Card, ...battles);
        console.info(`P1 WINS${isWar ? " THE BATTLE" : " THE HAND"}!`);
      } else if (p1Card.model.front.rank === p2Card.model.front.rank) {
        players[0].hand = player1Hand;
        players[1].hand = player2Hand;
        battles.push(p1Card, p2Card);
        console.info("IT'S WAR!");
        return this.setState({
          isWar: true,
          players,
          battles,
          ...this.checkWinner(players[0], players[1], deckSize),
        });
      } else {
        players[1].victories += battles.length + 2;
        player2Hand.push(p1Card, p2Card, ...battles);
        console.info(`P2 WINS${isWar ? " THE BATTLE" : " THE HAND"}!`);
      }
    } else {
      // One of the players does not have enough cards left to play the hand
      // The spoils shall go to the player who has enough cards to play the hand
      if (player1Hand.length <= numCardsToPlay) {
        players[1].victories += battles.length;
        player2Hand.push(...battles);
        console.info(`P2 WINS${isWar ? " THE BATTLE" : " THE HAND"}!`);
      } else if (player2Hand.length <= numCardsToPlay) {
        players[0].victories += battles.length;
        player1Hand.push(...battles);
        console.info(`P1 WINS${isWar ? " THE BATTLE" : " THE HAND"}!`);
      }
    }

    players[0].hand = player1Hand;
    players[1].hand = player2Hand;

    console.warn(
      `Player 1: ${player1Hand.length} Player 2: ${player2Hand.length}`
    );

    this.setState({
      isWar: false,
      players,
      battles: [],
      ...this.checkWinner(players[0], players[1], deckSize),
    });
  }

  checkWinner(player1, player2, deckSize) {
    const { autoPlayId } = this.state;
    let winner = this.state.winner;
    if (player1.hand.length === deckSize) {
      winner = player1;
    } else if (player2.hand.length === deckSize) {
      winner = player2;
    }
    if (winner) {
      clearInterval(autoPlayId);
    }
    return { winner, autoPlayId: winner ? null : autoPlayId };
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
        <h1>{`It's a game of ${this.constructor.name} for ${numPlayers} player${
          numPlayers > 1 ? "s" : ""
        }!`}</h1>
        {winner && (
          <h2 className={`victor`}>
            {winner.name.toUpperCase()} IS THE VICTOR!
          </h2>
        )}
        <fieldset>
          <legend>Dealer</legend>
          <button onClick={reset}>RESET</button>
          {!isDealt && <button onClick={this.shuffle}>SHUFFLE</button>}
          {!isDealt && <button onClick={this.deal}>DEAL</button>}
          {!autoPlayId && <button onClick={this.autoPlay}>AUTO-PLAY</button>}
          {!isDealt && (
            <button onClick={this.changeLayout}>
              {isStacked ? "UNSTACK" : "STACK"}
            </button>
          )}
        </fieldset>
        {
          <Deck
            model={model}
            imagePath={`/images/cards/standard`}
            stacked={isStacked}
            isFaceDown={isFaceDown}
          />
        }
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
                  {...p}
                  isStacked={true}
                  isFaceDown={true}
                />
              ))}
          </div>
          {isWar && (
            <div>
              <h2 className={`war`}>IT'S WAR!!</h2>
              <Deck
                model={{ cards: battles }}
                imagePath={`/images/cards/standard`}
                stacked={false}
                isFaceDown={false}
              />
            </div>
          )}
        </fieldset>
      </div>
    );
  }
}
