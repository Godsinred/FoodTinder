import React from 'react';
import YelpApi from './src/YelpApi/YelpApiClass.js'
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainContainer from './src/components/MainContainer/MainContainer';
import AppNavigator from './src/components/AppNavigator';

export default class App extends React.Component {

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <AppNavigator />
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
