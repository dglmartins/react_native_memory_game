import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../utils/colors';
import { shuffleDeck, animateShuffle } from '../actions/cardsActions';
import { resetClickControl, shufflingDeck, choosingFirst } from '../actions/clickControlActions';

class ShuffleButton extends Component {
  componentDidMount() {
    this.reset();
  }

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

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.reset}>
        <Text style={styles.reset}>Shuffle and Restart</Text>
      </TouchableOpacity>
    );
  }
}



const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 25,
    height: 5,
  	backgroundColor: colors.lightPurp,
  },
  reset: {
    padding: 7,
    textAlign: 'center',
    color: colors.white
  }
});

function mapDispatchToProps (dispatch) {
  return {
    shuffleDeck: () => dispatch(shuffleDeck()),
    shufflingDeck: () => dispatch(shufflingDeck()),
    choosingFirst: () => dispatch(choosingFirst()),
    resetClickControl: () => dispatch(resetClickControl()),
    animateShuffle: (data) => dispatch(animateShuffle(data))
  };
}

export default connect(null, mapDispatchToProps)(ShuffleButton);
