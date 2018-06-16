// 投稿のリストを取得して表示する画面

import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
//import axios from 'axios';

import DataList from '../components/DataList';
import DataViewScreen from './DataViewScreen';


class DataListScreen extends React.Component {
// componentWillMount動いていない?理由不明


  render() {

      const url = this.props.searchUrl;
      console.log('DataListScreen: url: ', url);

//    const dataList = this.state.dataList;
//    console.log('this.state.dataList@DataListScreen: ', dataList);
//    const items = this.props.dataList;
//    console.log('props.dataList@DataListScreen: ', items);

//    console.log('this.state.dataList@DataListScreen: ', this.state.dataList );
    return (
      <View style={styles.container}>
        <Text>DataListScreen</Text>
      </View>
    );
  }
}

// <DataList key={this.state.dataList.id} dataList={this.state.dataList} />

//        <DataList dataList={this.state.dataList} />

//        <MemoList memoList={this.state.dataList} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});

export default DataListScreen;

/*
axios.get(url)
// Json形式データをパースする
.then(res =>{ response.json()})
.then((resJson) => {
  const memoList = resJson.data.children;
  memoList = memoList.map(i => {
    i.key = i.data.url
    return i
  });
console.log(memoList);
this.setState({memoList});
}
*/

/* getUrls,giphyAPIを参考にデータ取得
url: `https://www.reddit.com./r/newsokur/hot.json` state内で

  componentWillMount(){
    axion.get(url)
    // Json形式データをパースする
    .then(response =>{ response.json()})
    .then((responseJson) => {
      const memoList = responseJson.data.children;
      memoList = memoList.map(i => {
        i.key = i.data.url
        return i
      });
    console.log(memoList);
    this.setState({memoList});
    }
  }
*/


/*
  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    // to avoid error
    const settings = {timestampsInSnapshots: true};
    db.settings(settings);

    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((snapshot) => {
        const memoList = [];
        snapshot.forEach((doc) => {
          memoList.push({ ...doc.data(), key: doc.id });
      });
      this.setState({ memoList });
    });
  }
  */


/*
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
