// Index.ios.js - place code in here for IOS!!!!

// import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
// import this way for libraries we create. ^^ this way if we do an npm install
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
// ^ import destructuring, just want text part of the library from ReactNative

// create Component
// component nesting. self closing tag <something />
const App = () => (
  // flex: 1 here means to not rubber band back to top when you scroll
  <View style={{ flex: 1 }}>
    <Header headerText={'T-Swift Albums'} />
    <AlbumList />
  </View>
);

// render it to device

// about to register component to project name 'albums'
// then second para is the first component to run in the application
AppRegistry.registerComponent('albums', () => App);
// () => fadero function? returns App even with out return key word
