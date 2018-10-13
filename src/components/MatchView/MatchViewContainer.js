import React, { Component } from 'react';
// import NavBar from './navbar';
import { Platform, StyleSheet, Text, View, Button, FlatList, List, ListItem } from 'react-native';
import PropTypes from 'prop-types';

import { searchByLocation, getBusinessDetails, getReview } from '../../YelpApi/YelpApiFunctions';
import ButtonGroup from './ButtonGroup';
import ScrollView from './ScrollView'


export default class MatchViewContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardStack: [],
            location: this.props.location,
        };
    }


    componentDidUpdate(oldProps) {
        console.log('MatchViewContainer componentDidUpdate')
        console.log(`original props: ${JSON.stringify(oldProps)}`)
        console.log(`New props: ${JSON.stringify(this.props)}`)
        if (this.props.latitude !== oldProps.latitude && this.props.longitude !== oldProps.longitude) {
            searchByLocation(this.props).then(results => {
                console.log(results[0]);
                this.setState({
                  businessId: results[0].id
                })
            })
        }
    }

    createCard(business) {
        console.log(`Card created for ${business.id}`);
        return business.id;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text>MatchViewContainer</Text>
                    <ScrollView
                      businessId={this.state.businessId}
                    >
                    </ScrollView>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'powderblue',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    buttonGroup: {
        alignSelf: 'flex-end'
    },

})

MatchViewContainer.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number
}
