import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

import 'prop-types';

class SwipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Array(20)
        .fill('')
        .map((_, i) => `item #${i}`),
    };
  }

  render() {
    return (
      <SwipeListView
        useFlatList={true}
        data={this.state.data}
        stopLeftSwipe={true}
        renderItem={(rowData, rowMap) => (
          <View style = {styles.rowFront}>
            <Text>I am {rowData.item.text} in a SwipeListView</Text>
          </View>
        )}
        renderHiddenItem={(rowData, rowMap) => (
          <View style = {styles.yelp}>
              <Text/>
              <TouchableOpacity>
                onPress={_ => rowMap[rowData.item.key].closeRow()}
                  <Text style = {styles.yelpText}> YELP </Text>
              </TouchableOpacity>
          </View>
        )}
        rightOpenValue={-75}
        leftOpenValue={75}
        onRowOpen={(rowKey, rowMap) => {
          setTimeout(() => {
            rowMap[rowKey].closeRow();
          }, 2000);
        }}
        previewRowKey={this.state.data[0].key}
      />
    );
  }
}

const styles = StyleSheet.create({
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 50,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  yelp: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'green',
    flex: 1,
    flexDirection: 'row',
    paddingRight: 20
  },
  yelpText: {
   textAlign: 'center' 
  },
  rowBack1: {
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowBack2: {
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor: 'green',
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
  }
  
});
export default SwipeList;