import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class InfoBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.source} style={{
          width: 300,
          height: 300,
          alignSelf:'center'
        }}/>
      </View>
    )
  }

}
  const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: 'stretch'
  },
});
