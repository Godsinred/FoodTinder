import React, { Component, PropTypes } from 'react';
import { Text, View, Image, Linking, StyleSheet } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

export default class Navbar extends Component {
  constructor(props) {
      super(props);
      this.state = {
          textValue: "Matches",
          matchBool: true
      }
  }

  onPress = () => {
    if (this.state.matchBool) {
      this.setState({
        textValue: "Back",
        matchBool: false
      })
    }
    else {
      this.setState({
        textValue: "Matches",
        matchBool: true
      })
    }
  }
  render() {
    return (
      <View>
        <CardSection cardStyle={ styles.constainerStyle }>
          <Button onPress = { this.onPress }>
            { this.state.textValue }
          </Button>
        </CardSection>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  navBarStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  constainerStyle: {
    borderBottomWidth: 1,
    marginTop: 15,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});
