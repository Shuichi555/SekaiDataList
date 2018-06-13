import React, { Component } from 'react';
import { WebView, View } from 'react-native';

class DataViewScreen extends React.Component{
  render() {

//    const dataUrl = this.state.viewItem.url;

//    console.log(dataurl);

    return(
      <WebView
        source={{uri: `https://medium.com/async-la/react-navigation-stacks-tabs-and-drawers-oh-my-92edd606e4db`}}
        style={{margintop: 20}}
      />
    );
  }

};
export default DataViewScreen;
