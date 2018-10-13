import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class InfoBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.p80Container}>
        <View style={styles.smallContainer}>
             <Text style={styles.nameContainer}>{this.props.name}</Text>
        </View>

        <View style={styles.smallContainer}>
             <Text style={styles.locationContainer}>{this.props.city}, {this.props.distance} mi.</Text>

        </View>
      </View>
      <View style={styles.p20Container}>
         <View style={styles.smallContainer}>
            <Text style={styles.detailContainer}>{this.props.rating}</Text>
        </View>
        <View style={styles.smallContainer}>
            <Text style={styles.detailContainer}>{this.props.price}</Text>
        </View>
      </View>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
  container: {
   flex: 1, flexDirection: 'row'
  },
  p80Container: {
    flex: 0.8,
    height: 100,
    backgroundColor: 'powderblue',
    flexDirection: 'column'
  },
  p20Container: {
    flex: 0.2,
    height: 100,
    backgroundColor: 'skyblue',
    flexDirection: 'column'
  },
  smallContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  locationContainer:{
    fontSize: 18,
  },
   detailContainer:{
    fontSize: 20,
  },
  });
