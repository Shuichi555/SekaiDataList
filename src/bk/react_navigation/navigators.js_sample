
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Navigators
import { createDrawerNavigator, createStackNavigator, createTabNavigator } from 'react-navigation'

// StackNavigator screens
import DataListScreen from '../screens/DataListScreen';
import DataViewScreen from '../screens/DataViewScreen';

// TabNavigator screens
// import TabA from './TabA'
// import TabB from './TabB'
// import TabC from './TabC'

// Plain old component
// import Plain from './Plain'


export const Stack = createStackNavigator({
  DataList: { screen: DataListScreen },
  DataView: { screen: DataViewScreen },
}, {
  initialRouteName: 'DataList',
})

/*
export const Tabs = createTabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: Stack },
}, {
  order: ['TabA', 'TabB', 'TabC']
})

export const Drawer = createDrawerNavigator({
  Stack: { screen: Stack },
  Tabs: { screen: Tabs },
  Plain: { screen: Plain },
})
*/
