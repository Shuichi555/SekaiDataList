// 投稿のリストを取得して表示する画面

import React from 'react';
import { StyleSheet, Platform, FlatList, TouchableHighlight } from 'react-native';
import { SwipeRow, View, Button, Icon, Text } from 'native-base';

// Stockした日付の取得・管理用
// import Timestamp from 'react-timestamp';
// import Moment from 'react-moment';
// import 'moment-timezone';

// import axios from 'axios';



class LocalStockScreen extends React.Component {

  state = {
    newStock: {},
    stocks: {},
  }

/*
id
created_at
likes_count
url
title
tags[{name:"JavaScript", .. }, {}]ここにタグ情報が入ってる
updated_at
body
rendered_body
*/

/** ！！！とっても重要！！！
* FlatList内で使う"item"は、ただ単なる"そのリスト内のアイテム"
* 名前は深く考えず、FlatList内で同一名称のものを使い回せばよい
*
* FlatList使い方Evernote参照
*/



  _keyExtractor = (item) => item.id;


  render() {

    // navigationで渡ってくるオブジェクト
    const propdata = this.props.navigation.state.params;

    // 既存ストックデータ（各画面内で受け渡ししている）
    let stockData = propdata.stockData;
    console.log('stockData@LocalStockScreen: ', stockData);

    // 新規ストックデータ
    const newData = propdata.newData;
    console.log('newData@LocalStockScreen: ', newData);

    // その他受け渡しデータ
/*
    const key = propdata.id;
    const url = propdata.searchUrl;
    const items = propdata.dataList;
    const search = propdata.searchWord;
    const limit = propdata.searchNum;
    const results = items.length;
*/
    // 配列を連結する
//    stockData = { ...stockData, newData };

    /* 記述の仕方TIPS
          .get()
          .then((snapshot) => {
            const memoList = [];
      //    memoList.push(doc.data() { key: doc.id }); ↓こんな感じのイメージで実装したい
            snapshot.forEach((doc) => {
              memoList.push({ ...doc.data(), key: doc.id });
            });
    //      this.setState({ memoList: memoList }); ↓下行のように書ける
            this.setState({ memoList });
          })
          .catch((error) => {
            console.log(error);
          });
    */

//    console.log('stockData2@LocalStockScreen: ', stockData);


//    const headtitle = `SearchWord: ${search}, #ofQuery: ${limit}, #ofResults: ${results}`;
//    console.log('props.dataList@DataListScreen: ', items);
//    console.log('items[0].title: ', items[0].title);
//    console.log('this.state.dataList@DataListScreen: ', this.state.dataList );

    return (
      <View style={styles.container}>
        <FlatList
          data={newData}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) =>
            (<SwipeRow
              leftOpenValue={0}
              rightOpenValue={-75}
              body={
                <TouchableHighlight
                onPress={() =>
                this.props.navigation.navigate('LocalDataView', {
                  url: item.url,
                  stockData
                })}>
                  <View style={styles.dataListItem}>
                    <Text style={styles.dataTitle}>{item.title}</Text>
                    <Text style={styles.dataDate}>Last Updated: {item.updated_at}</Text>
                  </View>
                </TouchableHighlight>
              }
              right={
                <Button danger onPress={() => alert('Trash')}>
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

//                 <Button danger onPress={() => alert('Trash')}>


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

export default LocalStockScreen;
