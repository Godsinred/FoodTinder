import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import Spinner from './Spinner';
import Input from './Input';

export default class LoginPage extends Component {
  static navigationOptions = {
    title: 'LoginPage',
  };
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCjdDjc_Sp7aPinGmXR4xI-h8toRL3Cl2g',
    authDomain: 'auth-97ea1.firebaseapp.com',
    databaseURL: 'https://auth-97ea1.firebaseio.com',
    projectId: 'auth-97ea1',
    storageBucket: 'auth-97ea1.appspot.com',
    messagingSenderId: '963687621607'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Text>Authentication </Text>
        {this.renderContent()}
      </View>
    );
  }
}
