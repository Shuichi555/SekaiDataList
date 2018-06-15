

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MainScreen from './src/screens/MainScreen';
import rootReducer from './src/reducers';

class App extends React.Component {
  // ここでは通常のreducerを作る?
  store = createStore(rootReducer);

  render() {
    return (
      <Provider store={this.store}>
        <MainScreen />
      </Provider>
    );
  }
}
AppRegistry.registerComponent('App', () => App);

export default App;

/*
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './src/reducers/AppReducer';
import AppWithNavigationState from './src/components/AppNavigator';

class ReduxExampleApp extends React.Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp);

export default ReduxExampleApp;
*/
