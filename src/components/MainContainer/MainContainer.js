import React, { Component, PropTypes } from 'react';
// import NavBar from './navbar';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Constants, Location, Permissions } from 'expo';


import {searchByLocation} from '../../YelpApi/YelpApiFunctions';

export default class AppContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: null,
            businesses: 'businesses here'
        }
    }

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
            console.log('Error')
        } else {
            this._getLocationAsync();
        }
    };

    _getLocationAsync = async () => {
        console.log('get location')
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let thisLocation = await Location.getCurrentPositionAsync({});
        let requiredLocation = {
            latitude: thisLocation.coords.latitude,
            longitude: thisLocation.coords.longitude
        }

        this.setState({ location: requiredLocation });
        console.log('Got location: ')
        console.log(requiredLocation);
    };

    searchBusinesses(){
        console.log(this.state.location);
        searchByLocation(this.state.location).then(results =>{
            this.setState({
                businesses: JSON.stringify(results)
            })
            console.log(results);
        })
    }

    render() {
        let text = 'Waiting..';
        return (
          <View style={styles.container}>
            <Text style={styles.paragraph}
                onPress={this.searchBusinesses.bind(this)}
            >{this.state.businesses}</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      textAlign: 'center',
    },
  });
