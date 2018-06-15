// ルーティング、redux設定？

import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
//import { StackNavigator } from 'react-navigation';

// use react-native-router-flux V3.43
import { Actions, Router, Scene } from 'react-native-router-flux';
// for using redux
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Search from './Search';
import ImageView from './ImageView';
//import rootReducer from './src/reducers';

//middleware 引数が必要
//const store = createStore(rootReducer, );

const store = createStore(reducer);


const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Search" initial component={Search} title="Search" />
    <Scene key="ImageView" component={ImageView} title="ImageView" />
  </Scene>
);

// stateを受け取って、stateをpropsに格納して渡せるようにするメソッド
const mapStateToProps = state => {
  return {
    number: state
  };
};

// dispatchを受け取って、関数を渡せるようにする
const mapDispatchToProps = dispatch => {
  return {
      // numを引数に、actiontype,payloadを渡す
      // actiontype:'PLUS',payload:
      plus: num => {
        dispatch({ type: 'PLUS', payload: { num: num } });
      },
      minus: num => {
        dispatch({ type: 'MINUS', payload: { num: num } });
      }
  };
};


// const App extends React.Component = () =>

// reduxを使うためにProviderタグで囲う＆store={store}を渡す
class MainScreen extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router scenes={scenes} />
      </Provider>
    );
  }
}

// ハイオーダーコンポーネント？？２つ目の引数にコンポーネント自身を渡す
// export default App; を↓に変更する(connect をexport)
export default connect(mapStateToProps, mapDispatchToProps)(App);

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
