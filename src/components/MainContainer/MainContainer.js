import React, { Component, PropTypes } from 'react';
import NavBar from './navbar';

export default class AppContainer extends Component {
    constructor(props){
        super(props);
        this.state
    }


    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };




    render() {
        return (
            <NavBar>
            //navbar here
            </NavBar>
        )
    }
}

