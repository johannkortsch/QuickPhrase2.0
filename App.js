/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import EnglishPhrases from './App/Containers/EnglishPhrases';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }




const SimpleApp = StackNavigator({
  Home: { screen: EnglishPhrases }
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
*/


import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import EnglishPhrases from 'QuickPhrase/App/Containers/EnglishPhrases';
import GermanPhrases from 'QuickPhrase/App/Containers/GermanPhrases';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
const QuickPhrase = StackNavigator({
  EnglishPhrases: { screen: EnglishPhrases },
  GermanPhrases: { screen: GermanPhrases }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'EnglishPhrases',

})
//export default QuickPhrase

AppRegistry.registerComponent('EnglishPhrases', () => QuickPhrase )
*/