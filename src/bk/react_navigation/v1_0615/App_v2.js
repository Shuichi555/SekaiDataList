// use react-navigation, because react-native version is 0.55.4

import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import DataListScreen from './src/screens/DataListScreen';
import DataViewScreen from './src/screens/DataViewScreen';
import DataSearchScreen from './src/screens/DataSearchScreen';

const App = StackNavigator(
  {
    DataSearch: { screen: DataSearchScreen },
    Home: { screen: DataListScreen },
    DataView: { screen: DataViewScreen },
  },
/*  {
    initialRouteName: 'Home',
  },
*/  {
    navigationOptions: {
      headerTitle: "SekaiDataList!",
      headerBackTitle: null,
      headerTintColor: '#fff',
      headerStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        backgroundColor: '#265366',
        ...Platform.select({
          android: {
            height: 80,
            paddingTop: 20,
          },
        }),
      },
      headerTitleStyle: {
        color: '#fff',
      },
    },
  }
);

export default App;

/*

constructor(props) {
  super(props);
  this.state = {
    url: `https://qiita.com/api/v2/tags/reactnative/items?page=1&per_page=10`,
    memoList: [],
  };
}


export default class App extends React.Component {

  componentWillMount() {
const listData = axios.get(this.state.url)
  // Json形式データをパースする
  .then(res =>{
    console.log(res);
        });
  this.setState({memoList});
      console.log(this.state.memolist[0]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
*/

/*

import MemoListScreen from './screens/MemoListScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/
