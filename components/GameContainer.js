import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import colors from '../utils/colors';
import CardRow from './CardRow';
import R from 'ramda';

const GameContainer = (props) => {
  return (
    <View style={styles.gameContainer}>
      <CardRow cards={R.range(0,3).map((index) => (
        props.cards[index]
      ))}/>
      <CardRow cards={R.range(3,6).map((index) => (
        props.cards[index]
      ))}/>
      <CardRow cards={R.range(6,9).map((index) => (
        props.cards[index]
      ))}/>
      <CardRow cards={R.range(9,12).map((index) => (
        props.cards[index]
      ))}/>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    flex: 12,
    alignSelf: "stretch",
    margin: 25,
    height: 5,
  	backgroundColor: colors.white,
    flexDirection: "column",
  }
});

function mapStateToProps({ cards }) {
  return {
    cards: Object.keys(cards).map((key) => (
      cards[key]
    ))
  }
}

export default connect(mapStateToProps)(GameContainer);
