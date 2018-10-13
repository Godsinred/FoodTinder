import React, { Component, PropTypes } from 'react';
// import NavBar from './navbar';
import { Platform, StyleSheet, Text, View, Button, PropTypes } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


import { searchByLocation } from '../../YelpApi/YelpApiFunctions';
const component1 = () => <Text>Hello</Text>
const component2 = () => <Text>World</Text>
const component3 = () => <Text>ButtonGroup</Text>
export default class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardStack: []
        };
    }

    componentWillMount() {
        searchByLocation(this.props.location).then(results => {
            results.business.forEach(business => {
                this.state.cardStack.push(this.createCard(business))
            })
        })
    }

    createCard(business) {
        console.log(`Card created for ${business.name}`);
        return business.id;
    }



    render() {
        const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
        return (
            <ButtonGroup
                style={styles.buttonGroup}
                onPress={console.log('here')}
                buttons={buttons}
                containerStyle={{ height: 100 }}
            />
        )
    }

}

const styles = StyleSheet({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    buttonGroup: {
        justifyContent: 'flex-end'
    }
})

AppContainer.PropTypes = {
    location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number
    }),
}