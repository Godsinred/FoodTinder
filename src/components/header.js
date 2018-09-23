// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a Component awlways the same name of the file name
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>);
};
// justifyContent => vertical alignment
// alignItems => hoirzontal alignment
// 'start' || 'center' \\  'end'

const styles = {
  viewStyle:
  {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// make the component available to other parts of the app
// app component is the root component and every other component is a child Component
// only root component uses appregistry
export default Header;
