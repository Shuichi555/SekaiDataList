// 投稿のリストを取得して表示する画面

import React from 'react';
import { StyleSheet, View, Text, Platform, FlatList } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

import DataViewScreen from './DataViewScreen';

class NewDataListScreen extends React.Component {
/* コンストラクタ
  constructor(props) {
    super(props);
  }
*/
  state = {
    dataList: [],

    // DataViewScreenに渡す1記事情報
    viewData: [],
    // reactnative の検索をとりあえず
    url: `https://qiita.com/api/v2/tags/reactnative/items?page=1&per_page=10`
  }

// componentWillMount()でデータ取得まで待つためメソッド名前に「async」Promiseオブジェクトにawait付加
/* 参考：https://qiita.com/shisama/items/61cdcc09dc69fd8d3127
async componentWillMount() {

    const res = await axios.get(this.state.url);

//    axios.get(this.state.url).then((res) => {

//      const data = res.data.data;
      const dataList = res.data;

      // 配列を作る
//      const dataList = data.map;

      // stateを、取得した情報をもとに変更する
      this.setState({ dataList });
      console.log('this.state.dataList@componentWillMount/NewDataListScreen:', { dataList });
    }
*/

/* list.push???
db.collection(`users/${currentUser.uid}/memos`)
  .onSnapshot((snapshot) => {
    const memoList = [];
    snapshot.forEach((doc) => {
      memoList.push({ ...doc.data(), key: doc.id });
    });
    this.setState({ memoList });
  });
*/

// import from DataList.js
async  renderData() {

  // start componentWillMount
  const res = await axios.get(this.state.url);

    const dataList = res.data;

    // stateを、取得した情報をもとに変更する
    this.setState({ dataList });
    console.log('this.state.dataList@renderData/NewDataListScreen:', { dataList });

  // end of componentWillMount

    return (
          <SwipeRow
          leftOpenValue={0}
          rightOpenValue={-75}
            body={
              <TouchableHighlight onPress={() => Actions.DataView({ dataList })}>
                <View style={styles.dataListItem}>
                  <Text style={styles.dataTitle}>{dataList.title}</Text>
                  <Text style={styles.dataDate}>Last Updated: {dataList.updated_at}</Text>
                </View>
              </TouchableHighlight>
            }
            right={
              <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
              </Button>
            }
          />
    );
  }


  render() {
//    const { item } = this.state.dataList;
//    console.log({ item });

    return (
      <View style={styles.container}>
        <Text>NewDataListScreen</Text>
      </View>
    );
  }
}

//           <TouchableHighlight onPress={() => Actions.DataView({ item })}>

// not work <FlatList data={ item } renderItem={ () => { renderData() }} />

// <FlatList data={this.props.dataList} renderItem={this.renderMemo.bind(this)} />
// <DataList key={this.state.dataList.id} dataList={this.state.dataList} />

/* renderMemo

return (
  <View style={styles.container}>
    <Text>NewDataListScreen</Text>
    <FlatList data={{ item }} renderItem={ () => {
      <View>
      <TouchableHighlight onPress={() => Actions.DataView()}>
        <View style={styles.dataListItem}>
          <Text style={styles.dataTitle}>{item.title}</Text>
          <Text style={styles.dataDate}>Last Updated: {item.updated_at}</Text>
        </View>
      </TouchableHighlight>
    </View>
    }} />
  </View>
);

return (
      <SwipeRow
      leftOpenValue={0}
      rightOpenValue={-75}
        body={
          <TouchableHighlight onPress={() => Actions.DataView({ item })}>
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
      />
);

*/



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
    marginTop: 100,
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

export default NewDataListScreen;
