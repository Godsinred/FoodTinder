import React,  { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class MatchList extends Component {
  static navigationOptions = {
    title: 'Match List',
  };
  render() {
    return (
      <View style={styles.container}>
        Add friends here!
        <Button
          title="Back to Home"
          onPress={() =>
            this.props.navigation.navigate('MainContainer')
          }
        />
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
