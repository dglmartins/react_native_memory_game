import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import { shuffleDeck, showCard, hideCard, animateShuffle } from '../actions/cardsActions';
import { choosingFirst, choosingSecond, storeCardToCheckMatch, checkingMatch, incrementMatch, resetClickControl, shufflingDeck } from '../actions/clickControlActions';
import { getCardStyle, isMatch, hasChosenFirstAndCardDown, hasChosenSecondAndCardDown, areAllMatched, resetGameAndShuffleDeck } from '../utils/helpers';

class Card extends Component {

  state = {
    rotateAnim: new Animated.Value(0),
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.clickControl.status === 'SHUFFLING_DECK') {
      Animated.timing(
        this.state.rotateAnim,
        {
          toValue: nextProps.card.style.transform,
          duration: 150
        }
      ).start();
    } else if (nextProps.card.style.backgroundImage === null && this.state.rotateAnim._value !== 0 && nextProps.clickControl.status === 'CHECKING_MATCH') {
      this.turnOneCardDown(nextProps.card.id)
    }
  }

  turnOneCardUp = (cardId) => {
    this.props.showCard(cardId);
    Animated.timing(
      this.state.rotateAnim,
      {
        toValue: 0.5,
        duration: 150
      }
    ).start();
  };

  turnOneCardDown = (cardId) => {
    Animated.timing(
      this.state.rotateAnim,
      {
        toValue: 0,
        duration: 150
      }
    ).start();
  };

  reset = () => {
    this.props.shufflingDeck();
    this.props.resetClickControl();
    this.props.shuffleDeck();
    this.props.animateShuffle(360);

    setTimeout(() => {
      this.props.animateShuffle(0);
      this.props.choosingFirst();
    }, 500);
  }


  onClickCard = () => {
    const { storeCardToCheckMatch, choosingFirst, choosingSecond, checkingMatch, incrementMatch, resetClickControl, card } = this.props;
    if (hasChosenFirstAndCardDown(this.props.clickControl.status, this.state.rotateAnim._value)) {
      storeCardToCheckMatch(card);
      this.turnOneCardUp(card.id);
      choosingSecond();
    } else if (hasChosenSecondAndCardDown(this.props.clickControl.status, this.state.rotateAnim._value)) {
      const { cardToCheckMatch } = this.props.clickControl;
      checkingMatch();
      this.turnOneCardUp(card.id);
      if (isMatch(cardToCheckMatch, card)) {
        setTimeout(() => {
          incrementMatch();
          choosingFirst();
          if (areAllMatched(this.props.clickControl.matchCount, this.props.cards.length)) {
            alert ("Congratulations!");
            resetClickControl();
            this.reset();
          }
        }, 300);
      } else {
        setTimeout(() => {
          this.props.hideCard(cardToCheckMatch.id);
          this.props.hideCard(card.id);
          setTimeout(() => {
            choosingFirst();
          }, 300);
        }, 300);
      }
      storeCardToCheckMatch(null);
    }

  }

  render () {
    const style = getCardStyle(this.props.card);
    const rotateY = this.state.rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <TouchableOpacity onPress={this.onClickCard} style={styles.card} >
        <Animated.View style={[styles.card, {transform: [{ rotateY }]}]}>
          <Image
            source={style.backgroundImage}
            style={styles.image}
          />
        </Animated.View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 1,
  	backgroundColor: colors.white,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: null,
    borderColor: colors.gray,
    borderWidth: 0.5,
  }
});

function mapDispatchToProps (dispatch) {
  return {
    shuffleDeck: () => dispatch(shuffleDeck()),
    shufflingDeck: () => dispatch(shufflingDeck()),
    showCard: (data) => dispatch(showCard(data)),
    rotateCard180: (data) => dispatch(rotateCard180(data)),
    rotateCard0: (data) => dispatch(rotateCard0(data)),
    hideCard: (data) => dispatch(hideCard(data)),
    animateShuffle: (data) => dispatch(animateShuffle(data)),
    choosingFirst: () => dispatch(choosingFirst()),
    choosingSecond: () => dispatch(choosingSecond()),
    storeCardToCheckMatch: (data) => dispatch(storeCardToCheckMatch(data)),
    checkingMatch: () => dispatch(checkingMatch()),
    incrementMatch: () => dispatch(incrementMatch()),
    resetClickControl: () => dispatch(resetClickControl())
  };
}

function mapStateToProps({ clickControl, cards }) {
  return {
    cards: Object.keys(cards).map((card) => cards[card]),
    clickControl
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);
