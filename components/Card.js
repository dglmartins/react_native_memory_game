import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../utils/colors';


// import { getCardStyle } from '../../utils/helpers';
// import './card.css';

const Card = (props) => {
  // const { card, handleCardClick } = props;
  // const style = getCardStyle(card)
  return (
    <View style={styles.card}>
      <Text>{props.word}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 1,
  	backgroundColor: colors.blue,
  }
})

export default Card;
