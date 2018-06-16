import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';

import DataListScreen from './src/screens/DataListScreen';
import DataViewScreen from './src/screens/DataViewScreen';
import DataSearchScreen from './src/screens/DataSearchScreen';

//import Icon from 'react-native-vector-icons/Ionicons';

/* 多分不要、mobx使用のため<Router wrapBy={observer}>
const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};
*/
// not working
export default class App extends React.Component {
  render() {
    return (
      <Router wrapBy={observer}>
        <Scene key="root">
          <Scene key="DataSearch" initial component={DataSearchScreen} title="DataSearch" />
          <Scene key="DataList" component={DataListScreen} title="DataList" />
          <Scene key="DataView" component={DataViewScreen} title="DataView" />
        </Scene>
      </Router>
    );
  }
}


/*
const App = () => (
  <Router wrapBy={observer}>
    <Scene key="root">
      <Scene key="DataSearch" initial component={DataSearchScreen} title="DataSearch" />
      <Scene key="DataList" component={DataListScreen} title="DataList" />
      <Scene key="DataView" component={DataViewScreen} title="DataView" />
    </Scene>
  </Router>
);
*/
