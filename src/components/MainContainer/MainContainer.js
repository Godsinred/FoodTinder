import React, { Component, PropTypes } from 'react';
// import NavBar from './navbar';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

import Navbar from './Navbar';
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

    static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Food Tinder',
      headerRight: (
        <Button
          onPress={ () => navigation.navigate('MatchList') }
          title="Matches"
          style={styles.textStyle}
        />
      ),
    };
  };

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
    };

    render() {
        return (
            <View style={{flex: 1}}>
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
