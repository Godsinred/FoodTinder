import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class InfoBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.p80Container}>
        <View style={styles.smallContainer}>
             <Text style={styles.detailContainer}>{this.props.name}, {this.props.city}</Text>
        </View>

        <View style={styles.smallContainer}>
               <Text style={styles.detailContainer}>{this.props.rating}</Text>

        </View>
      </View>
      <View style={styles.p20Container}>
         <View style={styles.smallContainer}>
            <Text style={styles.detailContainer}>{this.props.price}</Text>
        </View>
        <View style={styles.smallContainer}>
            <Text style={styles.detailContainer}>{this.props.distance} mi.</Text>   
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
    //backgroundColor: 'powderblue',
    flexDirection: 'column'
  },
  p20Container: {
    flex: 0.2, 
    height: 100,
   // backgroundColor: 'skyblue',
    flexDirection: 'column'
  },
  smallContainer: {
    height: 50,
    borderColor: 'royalblue', 
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContainer:{
    fontSize: 20,
  }
  });
