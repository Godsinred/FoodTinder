import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class InfoBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.p80Container}>
          <View style={styles.firstRowContainer}>
            <Text style={styles.nameContainer}>{this.props.name}</Text>
          </View>

          <View style={styles.secondRowContainer}>
            <Text style={styles.locationContainer}>{this.props.city}, {this.props.distance} mi.</Text>

          </View>
        </View>
        <View style={styles.p20Container}>
          <View style={styles.firstRowContainer}>
            <Text style={styles.detailContainer}>{this.props.rating}</Text>
          </View>
          <View style={styles.secondRowContainer}>
            <Text style={styles.detailContainer}>{this.props.price}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3, 
    flexDirection: 'row',
    top: 0,
    bottom: 0
  },
  p80Container: {
    flex: 0.9,
    flexDirection: 'column',
  },
  p20Container: {
    flex: 0.1,
    flexDirection: 'column',
    padding: 1,
  },
  firstRowContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  secondRowContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  nameContainer: {
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 3,
  },
  locationContainer: {
    fontSize: 15,
    textAlign: 'left',
    padding: 3,
  },
  detailContainer: {
    textAlign: 'right',
    padding: 3,
    fontSize: 15,
  },
});
