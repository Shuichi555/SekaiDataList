// 投稿のリストを取得して表示する画面

import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import axios from 'axios';

import DataList from '../components/DataList';
import DataViewScreen from './DataViewScreen';


class DataListScreen extends React.Component {
/* コンストラクタ
  constructor(props) {
    super(props);
  }
*/
  state = {
    dataList: [],
    viewData: [],
    // reactnative の検索をとりあえず
    url: `https://qiita.com/api/v2/tags/reactnative/items?page=1&per_page=10`
  }


  componentWillMount() {
    axios.get(this.state.url).then((res) => {

//      const data = res.data.data;
      const dataList = res.data;

      // 配列を作る
//      const dataList = data.map;

      // stateを、取得した情報をもとに変更する
      this.setState({ dataList });
      console.log('this.state.dataList:', { dataList });
    })
  }


  /*Gighy2 ではaction creater内で実行
    // axios でリクエストする
    axios.get(url).then(res => {
      const data = res.data.data;

      //url 配列を作る
      const imageUrlList = data.map

      // state　を、取得した情報をもとに変更する
      this.setState({gifUrlList: })
  */



  render() {
    return (
      <View style={styles.container}>
        <Text>DataListScreen</Text>
        <DataList key={this.state.dataList.id} dataList={this.state.dataList} />
      </View>
    );
  }
}

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
