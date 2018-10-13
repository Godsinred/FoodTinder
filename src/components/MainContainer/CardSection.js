import React from 'react';
import { View } from 'react-native';


const  CardSection = (props) => {
  return (
    <View style={styles.constainerStyle}>
    {props.children}</View>
  );
};

const styles = {
  constainerStyle: {
    borderBottomWidth: 1,
    marginTop: 15,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    position: 'absolute',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
