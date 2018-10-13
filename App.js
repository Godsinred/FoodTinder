import React from 'react';
import YelpApi from './src/YelpApi/YelpApiClass.js'
import { StyleSheet, Text, View, Button } from 'react-native';

import MainContainer from './src/components/MainContainer/MainContainer';
import Navbar from './src/components/MainContainer/Navbar';
import ButtonGroup from './src/components/MatchView/ButtonGroup';

export default class App extends React.Component {

  render() {
    // this can either be back button or Match Me!
    buttonText = 'Match me!'
    return (

      <View>
        <Navbar text={buttonText}></Navbar>
        <MainContainer></MainContainer>
        <ButtonGroup></ButtonGroup>
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
