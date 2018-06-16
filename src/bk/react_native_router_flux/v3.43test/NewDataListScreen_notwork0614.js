// 投稿のリストを取得して表示する画面

import React from 'react';
import { StyleSheet, Platform, FlatList, TouchableHighlight } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { SwipeRow, View, Button, Icon, Text } from 'native-base';

import DataViewScreen from './DataViewScreen';

class NewDataListScreen extends React.Component {
/* コンストラクタ
  constructor(props) {
    super(props);
  }
*/
  state = {
    dataList: {},
/*    dataList: {
      title: 'test title!',
      url: 'www.yahoo.co.jp',
      updated_at: '2018-06-14 12:29',
    },
*/
    // reactnative の検索をとりあえず
    url: `https://qiita.com/api/v2/tags/reactnative/items?page=1&per_page=10`
  }

// componentWillMount()でデータ取得まで待つためメソッド名前に「async」Promiseオブジェクトにawait付加
// 参考：https://qiita.com/shisama/items/61cdcc09dc69fd8d3127
// componentDidMountに変更してみる。
// 参考→https://stackoverflow.com/questions/33327755/how-to-wait-to-render-view-in-react-js-until-get-is-complete
  componentWillMount() {
    axios.get(this.state.url)
      .then((res) => {
        const dataList = res.data;
        console.log('res.data = ', res.data);

        this.setState({ dataList: dataList });

        renderData(dataList);

      });


//      const dataList = () => {
//        this.setState({ dataList: res.data });

    // 配列を作る
//  const dataList = data.map;

/* async,await失敗
    const res = await axios.get(this.state.url);

    const dataList = async () => {
      this.setState({ dataList: res.data });
    };
*/
    console.log('this.state.dataList@componentWillMount/NewDataListScreen:', { dataList });
  }

renderData = (item) => {
    return(
      <View>
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
      </View>
    )
  };

  render() {
    return (
      <View style={styles.dataList}>
        <FlatList data={this.props.dataList} renderItem={this.renderData.bind(this)} />
      </View>
    );
  }
}
//       <FlatList data={this.props.dataList} renderItem={this.renderMemo.bind(this)} />

/*
//    const { dataList } = item;
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
  }

  render() {

    const { dataList } = this.state.dataList;
    // stateを、取得した情報をもとに変更する
    //    this.setState({ dataList });
    console.log('this.state.dataList@render/NewDataListScreen:', { dataList });

    return (
      <View style={styles.container}>
        <Text>NewDataListScreen</Text>
        <View>
          <FlatList
            data={dataList}
            extraData={dataList}
            renderItem={ ({ item }) =>
              (<View>
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
              </View>)
            }
          />
        </View>
      </View>
    );
  }
}
*/
// <TouchableHighlight onPress={() => Actions.DataView({ item })}>
// not work <FlatList data={ item } renderItem={ () => { renderData() }} />
// <FlatList data={this.props.dataList} renderItem={this.renderMemo.bind(this)} />
// <DataList key={this.state.dataList.id} dataList={this.state.dataList} />

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
