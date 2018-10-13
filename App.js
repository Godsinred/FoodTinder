import React from 'react';
import YelpApi from './src/YelpApi/YelpApiClass.js'
import { StyleSheet, Text, View, Button } from 'react-native';

import MainContainer from './src/components/MainContainer/MainContainer';
import Navbar from './src/components/MainContainer/Navbar';

export default class App extends React.Component {

  render() {
    return (
      //<Navbar></Navbar>
      <View>
        <MainContainer></MainContainer>
      </View>

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
