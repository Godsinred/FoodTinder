import React from 'react';
import YelpApi from './src/YelpApi/YelpApiClass.js'
import { StyleSheet, Text, View, Button } from 'react-native';

import MainContainer from './src/components/MainContainer/MainContainer';

export default class App extends React.Component {
  functionOnClick() {
    var api = new YelpApi();
    let location = { latitude: 33.684566, longitude: -117.826508 }
    api.searchByLocation(location).then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <MainContainer></MainContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
