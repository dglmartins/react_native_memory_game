import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import reducer from './reducers';
import Header from './components/Header'

export default class App extends React.Component {
  render() {
    return (
      // <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <Header title="Memory Game"/>
          {/* <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text> */}
        </View>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
