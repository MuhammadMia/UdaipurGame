import {
  ACTIONS,
  NUM_RESOURCES_END,
  RESOURCES,
  LARGEST_HERD_BONUS,
} from "../constants";
import { GAME_NAME } from "../config.js";
import { MoveValidate } from "./moveValidation";

const Error = (str) => {
  console.log("ERROR: " + str);
};

const shuffleDeck = (deck) => {
  for (var i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
};
const getWinner = (G) => {

};

var card = {
  suit: "Hearts",
  symbol: "A",
}

const generateDeck = () => {
  let deck = [];
  const suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
  const symbols = ["J", "9", "A", "10", "K", "Q"];

  for (let cardSuit = 0; cardSuit < suits.length; cardSuit++) {
    for (let cardSymbol = 0; cardSymbol < symbols.length; cardSymbol++) {
      deck[i] = new card(suits[cardSuit], symbols[cardSymbol]);
    }
  }

  return deck;
};

const findDealer = (players) => {
  let dealer = (int)(Math.random() * 4);
  switch (dealer) {
    case 1:
      return players[1]
      break;
    case 2:
      return players[2]
      break;
    case 3:
      return players[3]
      break;
    case 4:
      return players[4]
      break;
  }
}

const findTrumper = (players) => {
  let dealer = (int)(Math.random() * 4);
  switch (dealer) {
    case 1:
      return players[1]
      break;
    case 2:
      return players[2]
      break;
    case 3:
      return players[3]
      break;
    case 4:
      return players[4]
      break;
  }
}

const setTrump = (trumpCard) => {
  G.trump = trumpCard;
}

export const ThuneeGame = {
  name: GAME_NAME,
  setup: () => {
    const deck = generateDeck();
    var start = {
      chat: [],
      trump: {},
      players: {
        1: { cards: [], isDealer: false, balls: 0 },
        2: { cards: [], isDealer: false, balls: 0 },
        3: { cards: [], isDealer: false },
        4: { cards: [], isDealer: false },
      },
      table: {
        dealer: { findDealer(players) },
        trumper: {}
      },
      deck: deck,


    };

    //Todo Blackjack to determine dealer
    //Todo Add ability to shuffle and cut

    // Deal 4 cards sequentially to each player


    // Adding deckSize so that the Deck can be stripped in the future
    // deckSize will get updated after turn onEnd
    start.deckSize = start.deck.length;
    return start;
  },
  //playerView: PlayerView.STRIP_SECRETS,
  moves: {
    deal4: (G, ctx) => {
      for (let i = 1; i < 5; i++) {
        for (let j = 0; j < 4; j++) {
          G.players[i].cards.push(start.deck.pop());
        }
      }
    },

    //Todo Code all these moves

    setTrump: (G, ctx) => {

    },

    callForTrump: (G, ctx) => {

    },

    blindRoyals: (G, ctx) => {

    },

    blindThunee: (G, ctx) => {

    },

    deal2: (G, ctx) => {

    },

    comeDown: (G, ctx) => {

    },

    callThunee: (G, ctx) => {

    },

    callRoyals: (G, ctx) => {

    },

    callPoints: (G, ctx) => {

    },

    trumpless: (G, ctx) => {

    },
  },

};
