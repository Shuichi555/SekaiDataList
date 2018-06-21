// 投稿のリストを取得して表示する画面

import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Platform } from 'react-native';
import axios from 'axios';

// import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Light } from 'react-native-router-flux';
// import { observer } from 'mobx-react/native';


import DataList from '../components/DataList';
import DataViewScreen from './DataViewScreen';


class DataSearchScreen extends React.Component {

  state = {
    //不要かも？　dataList空配列
    dataList: {},
    // 検索URL（完成形）
    searchUrl: '',
    //検索キーワード(テスト用初期値)
    searchWord: 'ReactNative',
    //取得データ件数(初期値)
    searchNum: '10',
  }
/*  props = {
    pheadUrl: 'https://qiita.com/api/v2/tags/',
    ptailUrl: '/items?page=1&per_page=',
    stockData: {},
  }
*/
  async handleSubmit() {
    // navigationで渡ってくるオブジェクト
    const propdata = this.props.navigation.state.params;

    // 既存ストックデータ（各画面内で受け渡ししている）
//    const { stockData } = propdata.stocks;
    const stockData = [];
    const newData = [];
//    console.log('stockData: DataSearchScreen: ', stockData);

    const headUrl = 'https://qiita.com/api/v2/tags/';
    const tailUrl = '/items?page=1&per_page=';

    // リクエスト先URL作成
    const search = this.state.searchWord;
    const limit = this.state.searchNum;
    const finUrl = headUrl + search + tailUrl + limit;

    await axios.get(finUrl).then((res) => {
      const dataList = res.data;

      // stateを、取得した情報をもとに変更する
      this.setState({
        dataList:   dataList,
        searchUrl:  finUrl,
        searchWord: search,
        searchNum:  limit
      });
//      console.log('res.data: ', dataList);
//      console.log('dataList: ', this.state.dataList);
//      console.log('backupUrl: ', this.state.backupUrl);

      this.props.navigation.navigate('Home',
        {
          dataList: dataList,
          searchUrl: finUrl,
          searchWord: search,
          searchNum: limit,
          stockData,
          newData,
        });

    });

  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>
        Qiita キーワード検索
      </Text>
      <TextInput
        style={styles.input}
        value={this.state.searchWord}
        onChangeText={(text) => { this.setState({ searchWord: text }); }}
        autoCapitalize="none"
        autoCollect={false}
        placeholder="検索キーワード入力"
        underlineColorAndroid="transparent"
      />
      <TextInput
          style={styles.input}
        value={this.state.searchNum}
        onChangeText={(text) => { this.setState({ searchNum: text }); }}
        autoCapitalize="none"
        autoCollect={false}
        placeholder="検索する記事の件数入力"
      />
      <TouchableHighlight
        style={styles.button}
        underlayColor="#C70F66"
        onPress={this.handleSubmit.bind(this)}>
        <Text style={styles.buttonTitle}>
          Search!!
        </Text>
      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      padding: 24,
      backgroundColor: '#FFFDF6',
    },
    input: {
      backgroundColor: '#eee',
      height: 48,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: '#DDD',
      padding: 8,
    },
    title: {
      fontSize: 28,
      alignSelf: 'center',
      marginBottom: 24,
    },
    button: {
      backgroundColor: '#E31676',
      height: 48,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      width: '60%',
      alignSelf: 'center',
    },
    buttonTitle: {
      color: '#fff',
      fontSize: 18,
    },
    signup: {
      marginTop: 16,
      alignSelf: 'center',
    },
    signupText: {
      fontSize: 16,
    },
  });


export default DataSearchScreen;
