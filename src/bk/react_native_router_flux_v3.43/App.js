// use react-navigation, because react-native version is 0.55.4

import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

// use react-native-router-flux V3.39.1
import { Actions, Router, Scene } from 'react-native-router-flux';

import NewDataListScreen from './src/screens/NewDataListScreen';
import DataViewScreen from './src/screens/DataViewScreen';
// import DataListScreen from './src/screens/DataListScreen';


const scenes = Actions.create(
  <Scene key="root">
    <Scene key="NewDataList" initial component={NewDataListScreen} title="NewDataList" />
    <Scene key="DataView" component={DataViewScreen} title="DataView" />
  </Scene>
);

//     <Scene key="DataList" initial component={DataListScreen} title="DataList" />


export default class App extends React.Component {
  render() {
    return (
      <Router scenes={scenes} />
    );
  }
}

/* https://github.com/aksonov/react-native-router-flux/issues/2253
const App = () => {
  return (
    <Scene key="root">
      <Scene key="DataList" initial component={DataListScreen} title="DataList" />
      <Scene key="DataView" component={DataViewScreen} title="DataView" />
    </Scene>
  );
}
export default App;
*/


/*
const App = createStackNavigator({
  Home: { screen: DataListScreen },
  DataView: { screen: DataViewScreen },
},
{
  initialRouteName: 'Home',
},
{
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
});
*/

// export default App;

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
