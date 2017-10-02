import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const ShuffleButton = (props) => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.reset}>Shuffle and Restart</Text>
  </TouchableOpacity>
);


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

export default ShuffleButton;
