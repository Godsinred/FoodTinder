import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import CardSection from '../MainContainer/CardSection';
import Button from '../MainContainer/Button';

const ButtonGroup = ({ text }) => {
  const {
    buttonGroupStyle
  } = styles;
  return (
      <CardSection>
        <Button>
          { 'No' }
        </Button>
        <View style = {{ padding: 10 }}></View>
        <Button>
          { 'Maybe' }
        </Button>
        <View style = {{ padding: 10 }}></View>
        <Button>
          { 'Yes' }
        </Button>
      </CardSection>
  );
};
const styles = {
  buttonGroupStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',

  }
};

export default ButtonGroup;
