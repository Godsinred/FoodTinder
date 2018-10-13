import React, { Component, PropTypes } from 'react';
// import NavBar from './navbar';
import { Platform, StyleSheet, Text, View, Button, PropTypes} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


import {searchByLocation} from '../../YelpApi/YelpApiFunctions';

export default class AppContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            cardStack: []
        };
    }

    componentWillMount(){
        searchByLocation(this.props.location).then(results =>{
            results.business.forEach(business =>{
                this.state.cardStack.push(this.createCard(business))
            })
        })
    }

    createCard(business){
        console.log(`Card created for ${business.name}`);
        return business.id;
    }

    render(){

    }

}

const styles = StyleSheet({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    profileView:{
        
    }
})

AppContainer.PropTypes = {
    location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number
      }),
}