import React,  { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Animated, ImageBackground } from 'react-native';

export default class MatchList extends Component {
  state = {
  fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
}
  componentDidMount(){
     // Start counting when the page is loaded
     this.timeoutHandle = setTimeout(()=>{
          // Add your logic for the transition
          this.props.navigation.navigate('LoginPage')
     }, 3000);
   }

  componentWillUnmount(){
       clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
  }

  render() {
      return (
          <ImageBackground
            source={require('../Assets/DuckDuckFood.png')}
            style={styles.backgroundImage}>
          </ImageBackground>
        );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  text: {
    textAlign: 'center',
    color: '#0000',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 32,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
}
});
