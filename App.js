import React from 'react';
import YelpApi from './src/YelpApi/YelpApi.js'
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  functionOnClick() {
    var api = new YelpApi();
    let location = { latitude: 33.684566, longitude: -117.826508 }
    api.searchByLocation(location).then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button

          onPress={this.functionOnClick}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
