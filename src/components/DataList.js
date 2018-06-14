import React from 'react';
// import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';
import { StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import { SwipeRow, View, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

class DataList extends React.Component {
  renderMemo({ item }) {

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

//   <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', { memo: item }); }}>
//                   <Text style={styles.memoDate}>Tags: {item.tags}</Text>
//               <TouchableHighlight onPress={Actions.DataView({ viewData: item })}>

  render() {
    return (
      <View style={styles.dataList}>
        <FlatList data={this.props.dataList} renderItem={this.renderMemo.bind(this)} />
      </View>
    );
  }
}
//        <FlatList data={this.props.dataList} renderItem={ () => (renderMemo) } />

const styles = StyleSheet.create({
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

export default DataList;
