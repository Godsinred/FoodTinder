import React, { Component } from 'react';
// import NavBar from './navbar';
import { Platform, StyleSheet, Text, View, Button, FlatList, List, ListItem } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-deck-swiper'

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

<<<<<<< HEAD
    createFlatList(business) {
        console.log(business.id)
        getReview(business.id).then(response => {
            console.log('reviews')
            console.log(response);
            this.setState({
                reviews: response
            })
        })
    }

=======
>>>>>>> c42312d4c0729cdf46ded49647955b471112017d
    createCard(business) {
        console.log(`Card created for ${business.id}`);
        return business.id;
    }

    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
                    renderCard={(card) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.text}>{card}</Text>
                            </View>
                        )
                    }}
                    onSwiped={(cardIndex) => { console.log(cardIndex) }}
                    onSwipedAll={() => { console.log('onSwipedAll') }}
                    cardIndex={0}
                    backgroundColor={'#4FD0E9'}
                    stackSize={3}>
                    <Button
                        onPress={() => { console.log('oulala') }}
                        title="Press me">
                        You can press me
                    </Button>
                </Swiper>
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
