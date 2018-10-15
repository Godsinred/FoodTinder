import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Linking,
  Image
} from 'react-native';

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import {NavigationEvents} from 'react-navigation';

import {addToMatches, removeAllItems, printAllKeys, getAllMatches} from '../../db/DbWrapperFunctions';
import InfoBar from '../InfoBar/InfoBar';

import 'prop-types';

class SwipeList extends Component {

  static navigationOptions = {
    title: 'Swipe List',
  };

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
      <View>
      <NavigationEvents
        onDidFocus={payload =>{
          console.log('helloooooo');
          getAllMatches().then(matches =>{
            console.log(matches);
            this.setState({
              data: matches.map(match =>{
                return JSON.parse(match[1]);
              })
            })
          })
        }}
      />

      <SwipeListView
        useFlatList={true}
        data={this.state.data}
        stopLeftSwipe={1}
        renderItem={(rowData, rowMap) => (
          <View style = {styles.rowFront}>
            <InfoBar
              name={rowData.item.name}
              city={'San Diego'}
              distance={Number(rowData.item.distance/1609.34).toFixed(1)}
              rating={rowData.item.rating}
              price={rowData.item.price}
            />
          </View>
        )}
        renderHiddenItem={(rowData, rowMap) => (
          <View style = {styles.yelp}>
              <Text/>
              <TouchableOpacity
                onPress={() => {Linking.openURL(rowData.item.url)}}>
                  <Text style = {styles.textStyle}>Yelp</Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 100,
    padding: 0
  },
  yelp: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#af0606',
    flex: 1,
    flexDirection: 'row',
    paddingRight: 20
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 15
  },
});
export default SwipeList;
