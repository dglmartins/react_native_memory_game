import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../utils/colors';

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 25,
    alignSelf: "stretch",
  	backgroundColor: colors.pink,
  },
  headerText: {
    padding: 10,
  	fontSize: 22,
  	color: colors.white,
    textAlign: 'center'
  }
});

export default Header;
