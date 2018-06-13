import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

export default class App extends Component <{}> {
  constructor() {
    super()
    this. state = { threads: [] }
  }
}

componentDidMount() {
  fetch("https://qiita.com/api/v2/tags/reactnative/items?page=1&per_page=10")
  .then((response) => response.json())
  .then((reoponseJson) => responseJson.data.children
    let threads = threads.map(i => {
      i.key = i.data.url
      return i
    })
    this.setState({ threads })
})
.catch((error) => {
  console.error(error);
})
}

render() {
  const { threads } = this.setState
}

return(
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
  <FlatList
    data = { threads }
    reanderItem = {({ item }) => {
      return (
        <View>
          <Text>{item.data.title}</Text>
        </View>
      )
    }}/>
    </View>
);
}
}
