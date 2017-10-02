import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 25,
    height: 20,
  	backgroundColor: "hotpink",
  },
  headerText: {
    padding: 10,
  	fontSize: 22,
  	color: "#fff",
    textAlign: 'center'
  }
});

export default Header;
