import React, { Component } from 'react';
// import NavBar from './navbar';
import { Platform, StyleSheet, Text, View, Button, FlatList, List, ListItem } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-deck-swiper'
import { searchByLocation, getBusinessDetails, getReview, businessesFromJSON } from '../../YelpApi/YelpApiFunctions';
import ButtonGroup from './ButtonGroup';
import ScrollView from './ScrollView';
import CardContainer from '../CardContainer/CardContainer';
import {addToMatches, removeAllItems, printAllKeys, getAllMatches} from '../../db/DbWrapperFunctions';

export default class MatchViewContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: ['1', '2', '3'],
            swipedAllCards: false,
            swipeDirection: '',
            isSwipingBack: false,
            cardIndex: 0,
            location: this.props.location,
            businesses: []
        }
    }


    componentDidUpdate(oldProps) {
        if (this.props.latitude !== oldProps.latitude && this.props.longitude !== oldProps.longitude) {
            searchByLocation(this.props).then(results => {
                console.log(typeof (results))
                this.setState({
                    businesses: results
                })
            })
        }
    }

    renderCard = (business, index) => {
        return (
            <View style={styles.card}>
                <CardContainer business={business}></CardContainer>>
            </View>
        )
    };

    onSwipedAllCards = () => {
        this.setState({
            swipedAllCards: true
        })
    };

    rightSwipe = () => {
        //save to async storage
        console.log(`Right Swiped on ${this.state.businesses[this.state.cardIndex].name}`)
        addToMatches(this.state.businesses[this.state.cardIndex])
        printAllKeys();

    }

    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    marginTop={0}
                    style={styles.container}
                    cards={this.state.businesses}
                    renderCard={(card, index) => {
                        return this.renderCard(card, index);
                    }}
                    onSwiped={(cardIndex) => { console.log(cardIndex) }}
                    onSwipedAll={() => { console.log('onSwipedAll') }}
                    cardIndex={0}
                    backgroundColor={'#4FD0E9'}
                    stackSize={3}
                    verticalSwipe={false}

                >
                    <Button
                        onPress={() => { console.log('oulala') }}
                        title="Press me">
                        You can press me
                    </Button>
                </Swiper>
                <View style={styles.container}>
                    <Swiper
                        cardVerticalMargin={10}
                        cardHorizontalMargin={5}
                        infinite={true}
                        style={styles.container}
                        cards={this.state.businesses}
                        renderCard={(card, index) => {
                            return this.renderCard(card, index);
                        }}
                        onSwiped={(cardIndex) => {
                            console.log(`Card Index: ${cardIndex}`);
                            this.setState({
                                cardIndex: cardIndex
                            })
                        }}
                        onSwipedRight={this.rightSwipe}
                        onSwipedAll={() => { console.log('onSwipedAll') }}
                        cardIndex={0}
                        backgroundColor={'#4FD0E9'}
                        stackSize={3}
                    >
                    </Swiper>
                </View>
                <View>
                    <ButtonGroup

                    ></ButtonGroup>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    card: {
        flex: .85,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignContent: 'stretch'
    },
    text: {
        textAlign: 'center',
        fontSize: 50,
        backgroundColor: 'transparent'
    },
    done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
    }
})

MatchViewContainer.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number
}
