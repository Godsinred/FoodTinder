import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class InfoBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.source} style={{
          width: 200,
          height: 200,
          resizeMode: 'contain',
          alignSelf:'center'
        }}/>
      </View>
    );
  }

}
  const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    padding: 10,
    alignSelf: 'stretch'
  },
});
