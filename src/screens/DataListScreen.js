// 投稿のリストを取得して表示する画面

import React from 'react';
import { StyleSheet, Platform, FlatList, TouchableHighlight } from 'react-native';
import { SwipeRow, View, Button, Icon, Text } from 'native-base';

//import axios from 'axios';

//import DataList from '../components/DataList';
//import DataViewScreen from './DataViewScreen';


class DataListScreen extends React.Component {

/** ！！！とっても重要！！！
* FlatList内で使う"item"は、ただ単なる"そのリスト内のアイテム"
* 名前は深く考えず、FlatList内で同一名称のものを使い回せばよい
*
* FlatList使い方Evernote参照
*/

_keyExtractor = (item) => item.id;


  render() {
    const propdata = this.props.navigation.state.params;

//    const url = propdata.searchUrl;
    const items = propdata.dataList;
    const search = propdata.searchWord;
    const limit = propdata.searchNum;
    const results = items.length;

    const headtitle = `SearchWord: ${search}, #ofQuery: ${limit}, #ofResults: ${results}`;
//    console.log('props.dataList@DataListScreen: ', items);
//    console.log('items[0].title: ', items[0].title);
//    console.log('this.state.dataList@DataListScreen: ', this.state.dataList );

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
                <TouchableHighlight onPress={() => this.props.navigation.navigate('DataView', {url: item.url})}>
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
