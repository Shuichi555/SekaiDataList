import React, { Component } from 'react';
import { WebView } from 'react-native';

class LocalDataViewScreen extends React.Component {

  render() {

    const propdata = this.props.navigation.state.params;
    const url = propdata.url;

    const { stockData } = propdata.stockData;


//    console.log('url: ', url);

//    const { item } = this.state.item;
//    console.log('item @DataViewScreen: ', { item });

    //    const dataUrl = this.state.viewItem.url;
    //    console.log(dataurl);

//        const dataList = Actions.viewData;
//        console.log(dataList);

//    const dataUrlActions = Actions.state.viewItem.url;
//    console.log(dataUrlActions);

    return (
      <WebView
        source={{ uri: url }}
        style={{ marginTop: 20 }}
      />
    );
  }

};
export default LocalDataViewScreen;
