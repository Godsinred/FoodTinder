import React from 'react';
import { Text, View, Image, Linking, Button, TouchableOpacity, StyleSheet } from 'react-native';
import CardSection from '../MainContainer/CardSection';

const ButtonGroup = ({ onPress, children }) => {
  const {
    textStyle,
    buttonStyle,
    constainerStyle
  } = styles;
  return (
    <View style = { constainerStyle }>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Image style={{width: 50, height: 50, alignSelf: 'center'}} source={require("./redX.png")}/>
      </TouchableOpacity>
      <View style = {{ padding: 10 }} />
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Image style={{width: 50, height: 50, alignSelf: 'center'}} source={require("./yellowQuestionMark.jpeg")}/>
      </TouchableOpacity>
      <View style = {{ padding: 10 }} />
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Image style={{width: 50, height: 50, alignSelf: 'center'}} source={require("./greenCheckMark.jpg")}/>
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
    flex: 0.30, // expand to fit as much content as you can
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff'
  },
  constainerStyle: {
    borderBottomWidth: 1,
    marginTop: 15,
    padding: 5,
    backgroundColor: '#fff',
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default ButtonGroup;
