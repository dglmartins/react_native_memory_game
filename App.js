import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/rootReducer';
import Header from './components/Header';
import ShuffleButton from './components/ShuffleButton';
import GameContainer from './components/GameContainer';
import CardRow from './components/CardRow';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <Header title="Memory Game"/>
          <View style={{flex: 10}}>
            <ShuffleButton/>
            <GameContainer/>
          </View>
          {/* <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text> */}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

export default App;
