import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class DataViewScreen extends React.Component {
/*
  state = {
    viewData: [],
//    viewData: {},
  }
*/

/*
  componentWillMount() {
//    console.log(this.state.dataList);

    const { viewData } = Actions.state;
    this.setState({ viewData });

    console.log(this.state.viewData.url);
  }
*/

  render() {
//    const { item } = this.state.item;
//    console.log('item @DataViewScreen: ', { item });

    //    const dataUrl = this.state.viewItem.url;
    //    console.log(dataurl);

//        const dataList = Actions.viewData;
//        console.log(dataList);

//    const dataUrlActions = Actions.state.viewItem.url;
//    console.log(dataUrlActions);

    return(
      <WebView
        source={{uri: `https://medium.com/async-la/react-navigation-stacks-tabs-and-drawers-oh-my-92edd606e4db`}}
        style={{marginTop: 20}}
      />
    );
  }

};
export default DataViewScreen;
