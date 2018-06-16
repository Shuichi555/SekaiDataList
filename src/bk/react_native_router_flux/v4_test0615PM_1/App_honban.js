// use react-navigation, because react-native version is 0.55.4

import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
//import { StackNavigator } from 'react-navigation';

// use react-native-router-flux V3.43
import { Actions, Router, Scene } from 'react-native-router-flux';
// for using redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import DataListScreen from './src/screens/DataListScreen';
import DataViewScreen from './src/screens/DataViewScreen';
import DataSearchScreen from './src/screens/DataSearchScreen';
import rootReducer from './src/reducers';

//middleware 引数が必要
const store = createStore(rootReducer, );

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="DataSearch" initial component={DataSearchScreen} title="DataSearch" />
    <Scene key="DataList" component={DataListScreen} title="DataList" />
    <Scene key="DataView" component={DataViewScreen} title="DataView" />
  </Scene>
);

//     <Scene key="DataList" initial component={DataListScreen} title="DataList" />

// reduxを使うためにProviderタグで囲う＆store={store}を渡す
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes} />
      </Provider>
    );
  }
}


/* react navigation

const App = StackNavigator(
  {
    DataSearch: { screen: DataSearchScreen },
    Home: { screen: DataListScreen },
    DataView: { screen: DataViewScreen },
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
  }
);

export default App;
*/
