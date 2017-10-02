import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Animated, TouchableOpacity } from 'react-native';
import colors from '../utils/colors';
import { getCardStyle } from '../utils/helpers';

// import peppa from '../images/peppa.png';


// import { getCardStyle } from '../../utils/helpers';
// import './card.css';

class Card extends Component {

  state = {
    rotateAnim: new Animated.Value(0),
  }

  onClickCard = () => {
    console.log(this.state.rotateAnim)
    Animated.timing(
      this.state.rotateAnim,
      {
        toValue: (this.state.rotateAnim._value === 0) ? 1 : 0,
        duration: 300
      }
    ).start();
  }



  // const { card, handleCardClick } = props;
  // const style = getCardStyle(card)
  render () {
    // console.log(this.state);
    console.log(this.props.card);
    const style = getCardStyle(this.props.card);
    const rotateY = this.state.rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
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
    height: null
  }
})

export default Card;
