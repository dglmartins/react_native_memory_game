import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../utils/colors';

const GameContainer = (props) => (
  <View style={styles.gameContainer}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  gameContainer: {
    flex: 12,
    alignSelf: "stretch",
    margin: 25,
    height: 5,
  	backgroundColor: colors.pink,
    flexDirection: "column",
  }
});


export default GameContainer;
