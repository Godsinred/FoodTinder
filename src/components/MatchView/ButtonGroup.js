import React from 'react';
import { Text, View, Image, Linking, Button, TouchableOpacity, StyleSheet } from 'react-native';
import {addToMatches, removeAllItems, printAllKeys, getAllMatches} from '../../db/DbWrapperFunctions';

const ButtonGroup = ({ onPress, business }) => {
  const {
    textStyle,
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
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Image style={imageStyle} source={require("../../Assets/greenCheck.png")} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    padding: 3
  },
  buttonStyle: {
    flex: 0.25, // expand to fit as much content as you can
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff'
  },
  constainerStyle: {
    padding: 5,
    paddingBottom: 20,
    alignItems: 'stretch',
    // backgroundColor: '#fff',
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'relative',
    flexWrap: 'wrap',
  },
  imageStyle: {
    width: 30,
    height: 30,
    alignSelf: 'center'
  }
};

export default ButtonGroup;
