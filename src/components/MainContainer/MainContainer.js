import React, { Component, PropTypes } from 'react';
// import NavBar from './navbar';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import CardContainer from '../CardContainer/CardContainer';
import MatchViewContainer from '../MatchView/MatchViewContainer.js';
import firebase from 'firebase';
import LoginForm from '../LoginPage/LoginForm';
import LinearGradient from 'react-native-linear-gradient';


export default class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: {
                "latitude": null,
                "longitude": null
            },
            textValue: "Matches",
            matchBool: true,
            firebase: firebase
        }
    }

    static navigationOptions = ({ navigation, firebase }) => {
    return {
      headerTitle: <Text style={styles.headerTitle}>Duck Duck Food</Text>,
      headerLeft: (
        <Button
          onPress={ () => {
              try {
                  navigation.navigate('LoginPage');
              } catch (e) {
                  console.log(e);
              }
          } }
          title="Logout"
          style={styles.textStyle}
        />
      ),
      headerRight: (
        <Button
          onPress={ () => navigation.navigate('SwipeList') }
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
    headerTitle: {
        fontSize: 27,
        color: '#1F73D1',
        textShadowColor: '#ffff',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:1,
        fontWeight: '700',
    },
    constainerStyle: {
      borderBottomWidth: 1,
      marginTop: 0,
      padding: 5,
      //backgroundColor: '#fff',
      backgroundColor: '#fff8dc',
      justifyContent: 'flex-end',
      position: 'relative',
      flexDirection: 'row',
      borderColor: '#ddd',
    },
    buttonStyle: {
      flex: 0.25, // expand to fit as much content as you can
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff'
    },
    textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '900',
      padding: 2
    },
});
