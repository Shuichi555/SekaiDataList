// use react-navigation, because react-native version is 0.55.4

import React from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';
import { StackNavigator } from 'react-navigation';

import DataListScreen from './src/screens/DataListScreen';
import DataViewScreen from './src/screens/DataViewScreen';
import DataSearchScreen from './src/screens/DataSearchScreen';

const Navigator = StackNavigator(
  {
    DataSearch: { screen: DataSearchScreen },
    Home: { screen: DataListScreen },
    DataView: { screen: DataViewScreen },
  },
  {
    navigationOptions: {
      headerTitle: 'SekaiDataList!',
      headerBackTitle: null,
      headerTintColor: '#fff',
      headerStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        backgroundColor: '#55c500',
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
//    backgroundColor: '#272C36',
  },
  navigator: {
    backgroundColor: '#55c500',
  },
});

// SafeAreaView_onlyForIOS
export default class App extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Navigator style={styles.navigator} />
      </SafeAreaView>
    );
  }
}

//     backgroundColor: '#272C36',

/* for Mobx

#55c500
import { Provider } from 'mobx-react';
import { observerable } from 'mobx';
import ObservableNavStore from './src/components/ObservableNavStore';

stores:{
  navStore: ObservableNavStore,
};

render() {
  return (
    <Provider {...stores}>
      <SafeAreaView style={styles.safeArea}>
        <Navigator style={styles.navigator} />
      </SafeAreaView>
    </Provider>
  );
}
}
*/
