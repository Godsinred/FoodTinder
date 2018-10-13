import React, { Component, PropTypes } from 'react';
// import NavBar from './navbar';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Constants, Location, Permissions } from 'expo';


import MatchViewContainer from '../MatchView/MatchViewContainer.js';

export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                "latitude": null,
                "longitude": null
            },
            
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

        this.setState({ 
            location: {
                "latitude": thisLocation.coords.latitude,
                "longitude": thisLocation.coords.longitude
            }
        });
        console.log('Got location: ')
        console.log(this.state);
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>MainContainer</Text>
                <MatchViewContainer
                latitude={this.state.location.latitude}
                longitude={this.state.location.longitude}
                ></MatchViewContainer>
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

