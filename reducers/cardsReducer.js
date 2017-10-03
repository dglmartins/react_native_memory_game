import { generatedShuffledDeck } from '../utils/helpers';
import R from 'ramda';

import {
  SHUFFLE_DECK,
  ROTATE_CARD_180,
  ROTATE_CARD_0,
  SHOW_CARD,
  HIDE_CARD,
  ANIMATE_SHUFFLE
} from '../actions/cardsActions';

const arrayOfCharacters = ["peppa", "george", "mummy", "daddy", "grandma", "grandpa", "peppa", "george", "mummy", "daddy", "grandma", "grandpa"];

const initialState = generatedShuffledDeck(arrayOfCharacters);

export function cards (state = initialState, action) {
  const { cardId, degrees } = action;
  switch (action.type) {

    case SHUFFLE_DECK:
      return generatedShuffledDeck(arrayOfCharacters);
    // 
    // case ROTATE_CARD_180:
    // console.log("i get called")
    //   return {
    //     ...state,
    //     [cardId]: {
    //       ...state[cardId],
    //       style: {
    //         ...state[cardId].style,
    //         transform: 0.5
    //       }
    //     }
    //   };
    //
    // case ROTATE_CARD_0:
    //   return {
    //     ...state,
    //     [cardId]: {
    //       ...state[cardId],
    //       style: {
    //         ...state[cardId].style,
    //         transform: 0
    //       }
    //     }
    //   };

    case SHOW_CARD:
      return {
        ...state,
        [cardId]: {
          ...state[cardId],
          style: {
            ...state[cardId].style,
            backgroundImage: state[cardId].cardCharacter
          }
        }
      };

    case HIDE_CARD:
      return {
        ...state,
        [cardId]: {
          ...state[cardId],
          style: {
            ...state[cardId].style,
            backgroundImage: null
          }
        }
      };

    case ANIMATE_SHUFFLE:
      const updateCard = (card) => {
        return {
          ...card,
          style: {
            ...card.style,
            transform: degrees
          }
        };
      };
      return R.map(updateCard, state);

    default:
      return state;
  }
};
