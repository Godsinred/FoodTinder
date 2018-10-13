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
    flex: 0.2, 
    flexDirection: 'row',
  },
  p80Container: {
    flex: 0.8,
    flexDirection: 'column'
  },
  p20Container: {
    flex: 0.2,
    flexDirection: 'column'
  },
  firstRowContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
  },
  secondRowContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green'
  },
  nameContainer: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2
  },
  locationContainer: {
    fontSize: 18,
  },
  detailContainer: {
    fontSize: 14,
  },
});
