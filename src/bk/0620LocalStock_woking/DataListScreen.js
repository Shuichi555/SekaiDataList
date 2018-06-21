// 投稿のリストを取得して表示する画面

import React from 'react';
import { StyleSheet, Platform, FlatList, TouchableHighlight } from 'react-native';
import { SwipeRow, View, Button, Icon, Text } from 'native-base';

//import axios from 'axios';

//import DataList from '../components/DataList';
//import DataViewScreen from './DataViewScreen';


class DataListScreen extends React.Component {
/*
  static navigationOptions = ({ navigation }) => {

    const { params = {} } = navigation.state;

    return {
      headerRight: (
        <Button
        title='About'
        onPress={() => params.handleSubmit()} />
      )
    }
  };

  state = {
    url: '',
    stockData: {},
  }

  handleSubmit(url) {
    const propdata = this.props.navigation.state.params;

    const { stockData } = propdata.stockData;

    this.props.navigation.navigate('DataView', {
      url,
      stockData,
    });
  }
*/
/*
<TouchableHighlight
  onPress={() =>
  this.props.navigation.navigate('DataView', {
    url: item.url,
    stockData,
  })}
>
*/

/*
{ navigationOptions: () =>
  ({ header: (navigation) => ({
    title: 'add to stocks',
    right: <Button title='About' onPress={() =>
      navigation.navigate('LocalStock')} />}),
  })},

*/

/** ！！！とっても重要！！！
* FlatList内で使う"item"は、ただ単なる"そのリスト内のアイテム"
* 名前は深く考えず、FlatList内で同一名称のものを使い回せばよい
*
* FlatList使い方Evernote参照
*/

_keyExtractor = (item) => item.id;


  render() {

//    console.log(this.props.navigation);

    const propdata = this.props.navigation.state.params;


    const stockData = propdata.stockData;
//    this.setState({ stockData });

    console.log('stockData@DataListScreen: ', stockData);
//    console.log('state.stockData@DataListScreen: ', this.state.stockData);

//    const url = propdata.searchUrl;
    const items = propdata.dataList;
    const search = propdata.searchWord;
    const limit = propdata.searchNum;
    const results = items.length;

    const headtitle = `Word: ${search}, #Query: ${limit}, #Results: ${results}`;
//    console.log('props.dataList@DataListScreen: ', items);
//    console.log('items[0].title: ', items[0].title);
//    console.log('this.state.dataList@DataListScreen: ', items);

    return (
      <View style={styles.container}>
        <Text>{headtitle}</Text>
        <FlatList
          data={items}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) =>
            (<SwipeRow
              leftOpenValue={0}
              rightOpenValue={-75}
              body={
                <TouchableHighlight
                  onPress={() =>
                  this.props.navigation.navigate('DataView', {
                    url: item.url,
                    stockData,
                  })}
                >
                  <View style={styles.dataListItem}>
                    <Text style={styles.dataTitle}>{item.title}</Text>
                    <Text style={styles.dataDate}>Last Updated: {item.updated_at}</Text>
                  </View>
                </TouchableHighlight>
              }
              right={
                <Button danger
                  onPress={() => this.props.navigation.navigate('LocalStock', {
                  url: item.url,
                  newData: item,
                  stockData,
                })} >
                  <Icon active name="trash" />
                </Button>
              }
            />)
          }
        />
      </View>
    );
  }
}

//     <Button danger onPress={() => alert('Trash')}>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
  dataList: {
    width: '100%',
    // flexは画面全てをこの要素で覆う、という意味？
    flex: 1,
  },
  dataListItem: {
    padding: 16,
    height: 100,
    backgroundColor: '#fff',
  },
  dataTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  dataDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default DataListScreen;
