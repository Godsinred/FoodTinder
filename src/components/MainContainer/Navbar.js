import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const Navbar = ({ onPress, text }) => {
  const {
    navBarStyle,
    constainerStyle
  } = styles;
  return (
    <View>
      <CardSection cardStyle={constainerStyle}>
        <Button onPress = { onPress }>
          { text }
        </Button>
      </CardSection>
    </View>
  );
};
const styles = {
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
};

export default Navbar;
