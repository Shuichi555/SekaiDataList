// 投稿のリストを取得して表示する画面

import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight, Platform } from 'react-native';
import axios from 'axios';

import { NavigationActions } from 'react-navigation';

import { Provider } from 'react-redux';

import DataList from '../components/DataList';
import DataViewScreen from './DataViewScreen';


class DataSearchScreen extends React.Component {
  props = {
    pheadUrl: 'https://qiita.com/api/v2/tags/',
    ptailUrl: '/items?page=1&per_page=',

  }

  state = {
    //不要かも？　dataList空配列
    dataList: {},

// reactnative の検索をとりあえず
//    url: `https://qiita.com/api/v2/tags/reactnative/items?page=1&per_page=20`,
// url: `https://qiita.com/api/v2/tags/${this.state.searchWord}/items?page=1&per_page=${this.state.getNum}`,
//url: `https://qiita.com/api/v2/tags/${this.searchKey}/items?page=1&per_page=${this.getNum}`,
//    search: 'React',

//    limit: 30,

    //
//    url: `https://qiita.com/api/v2/tags/${search}/items?page=1&per_page=${limit}`,
    // 検索URL（完成形）
    searchUrl: '',
    //検索キーワード(テスト用初期値)
    searchWord: 'ReactNative',
    //取得データ件数(初期値)
    searchNum: '2',
  }

  async handleSubmit() {
    const headUrl = 'https://qiita.com/api/v2/tags/';
    const tailUrl = '/items?page=1&per_page=';

    // リクエスト先URL作成
    const search = this.state.searchWord;
    const limit = this.state.searchNum;
    const finUrl = headUrl + search + tailUrl + limit;
//    console.log('finUrl, :', finUrl);


//    const callUrl = `https://qiita.com/api/v2/tags/${search}/items?page=1&per_page=${limit}`;

//    console.log('callUrl: ', callUrl);

//    this.setState({ backupUrl: callUrl });

    //for test
//    const finUrl = 'https://qiita.com/api/v2/tags/React/items?page=1&per_page=30';
//    console.log('testUrl: ', testUrl);

    await axios.get(finUrl).then((res) => {
      const dataList = res.data;

//      const DataList = async () => {()}

      // stateを、取得した情報をもとに変更する
      this.setState({
        dataList:     dataList,
        searchUrl:  finUrl,
        searchWord: search,
        searchNum:  limit
      });
//      console.log('res.data: ', dataList);
      console.log('dataList: ', this.state.dataList);
//      console.log('backupUrl: ', this.state.backupUrl);

      this.props.navigation.navigate({ routeName:'Home' });

    });

    // Promiseオブジェクトを返す必要がある
//    axios.get(url).then((res) => {
/*    const res = async () => {
      axios.get(url)
    }
*/
//      const dataList = res.data;

      // stateを、取得した情報をもとに変更する
//      this.setState({ dataList: res.data });
//      console.log('this.state.dataList@DataListScreen: ', { dataList });

/*
    // urlで検索して結果を保存
    axios.get(callUrl)
    .then((res) => {

      const dataList = res.data;

//      const DataList = async () => {()}

      // stateを、取得した情報をもとに変更する
      this.setState({ dataList });
      console.log('this.state.dataList:', { dataList });
      console.log('backupUrl: ', this.state.backupUrl);

      this.props.navigation.navigate({ routeName: 'Home' });

    });
*/
/*
      // 検索をする度にNavigationを初期設定設定に戻す
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
*/
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
/* react sample
<form onSubmit={this.handleSubmit}>
  <input value={this.state.title} onChange={this.handleChange} />
  <input type="submit" value={buttonText} />
</form>
*/

//        <MemoList memoList={this.state.dataList} />

//     backgroundColor: '#FFFDF6',

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
