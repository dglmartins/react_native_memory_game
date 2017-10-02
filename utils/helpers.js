import R from 'ramda';
import logo from '../images/logo.png';
import peppa from '../images/peppa.png';
import george from '../images/george.png';
import mummy from '../images/mummy.png';
import daddy from '../images/daddy.png';
import grandma from '../images/grandma.png';
import grandpa from '../images/grandpa.png';

const shuffleArray = (array) => {
  const initialShuffleControlObject = {arrayToDrawFrom: array, drawnArray: []};
  const endingShuffleControlObject = array.reduce((accumulator, currentValue, index) => {
    const drawnIndex = Math.floor(Math.random() * (array.length - index));
    const drawnArray = accumulator.drawnArray.concat(accumulator.arrayToDrawFrom[drawnIndex]);
    const arrayToDrawFrom = accumulator.arrayToDrawFrom.filter((item, index) => (
      index !== drawnIndex
    ));
    return { arrayToDrawFrom, drawnArray };
  }, initialShuffleControlObject);
  return endingShuffleControlObject.drawnArray;
};

const generateInitialCardsState = (shuffledArray) => {
  return R.range(0, shuffledArray.length).reduce((cards, idNum, index) => {
    const newCard = {
    [`card${idNum + 1}`]: {
        id: `card${idNum + 1}`,
        style: {backgroundImage: null, transform: 'rotateY(0deg)'},
        cardCharacter: shuffledArray[index]
      }
    };
    return R.merge(cards, newCard);
  }, {});
};

export const generatedShuffledDeck = R.compose(generateInitialCardsState, shuffleArray);

export const getCardStyle = (card) => {
  switch (card.style.backgroundImage) {
    case "peppa":
      return {
        backgroundImage: require('../images/peppa.png'),
        transform: card.style.transform
      };
    case "george":
      return  {
        backgroundImage: require('../images/george.png'),
        transform: card.style.transform
      };
    case "mummy":
      return  {
        backgroundImage: require('../images/mummy.png'),
        transform: card.style.transform
      };
    case "daddy":
      return  {
        backgroundImage: require('../images/daddy.png'),
        transform: card.style.transform
      };
    case "grandma":
      return  {
        backgroundImage: require('../images/grandma.png'),
        transform: card.style.transform
      };
    case "grandpa":
      return  {
        backgroundImage: require('../images/grandpa.png'),
        transform: card.style.transform
      };
    default:
      return  {
        backgroundImage: require('../images/logo.png'),
        transform: card.style.transform
      };
  }
};

export const hasChosenFirstAndCardDown = (status, transform) => (status === 'CHOOSING_FIRST' && transform === 'rotateY(0deg)');
export const hasChosenSecondAndCardDown = (status, transform) => (status === 'CHOOSING_SECOND' && transform === 'rotateY(0deg)');
export const isMatch = (card1, card2) => (card1.cardCharacter === card2.cardCharacter);
export const areAllMatched = (matchCount, cardCount) => (matchCount === cardCount / 2);

export const turnOneCardUp = ({ showCard, rotateCard180 }, cardId) => {
  showCard(cardId);
  rotateCard180(cardId);
};

export const turnOneCardDown = ({ hideCard, rotateCard0 }, cardId) => {
  hideCard(cardId);
  rotateCard0(cardId);
};

export const resetGameAndShuffleDeck = ({ resetClickControl, shuffleDeck, animateShuffle }) => {
  resetClickControl();
  shuffleDeck();
  animateShuffle(360);

  setTimeout(() => {
    animateShuffle(0);
  }, 500);
};
