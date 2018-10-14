import React from 'react';
import { Text, View, Image, Linking, Button, TouchableOpacity, StyleSheet } from 'react-native';
import {addToMatches, removeAllItems, printAllKeys, getAllMatches} from '../../db/DbWrapperFunctions';

const ButtonGroup = ({ onPress, business }) => {
  const {
    buttonStyle,
    constainerStyle,
    imageStyle
  } = styles;
  return (
    <View style={constainerStyle}>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Image style={imageStyle} source={require("../../Assets/redX.png")} />
      </TouchableOpacity>
      <View style={{ flex: 0.05 }} />
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Image style={imageStyle} source={require("../../Assets/rubbyDucky.png")} />
      </TouchableOpacity>
      <View style={{ flex: 0.05 }} />
      <TouchableOpacity onPress={ () => { addToMatches(business) } } style={buttonStyle}>
        <Image style={imageStyle} source={require("../../Assets/greenCheck.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  buttonStyle: {
    flex: 0.30, // expand to fit as much content as you can
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  constainerStyle: {
    padding: 5,
    alignItems: 'stretch',
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'relative',
    flexWrap: 'wrap',
  },
  imageStyle: {
    width: 30,
    height: 20,
    alignSelf: 'center'
  }
};

export default ButtonGroup;
