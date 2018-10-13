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
        console.log('MatchViewContainer componentDidUpdate')
        console.log(`original props: ${JSON.stringify(oldProps)}`)
        console.log(`New props: ${JSON.stringify(this.props)}`)
        if (this.props.latitude !== oldProps.latitude && this.props.longitude !== oldProps.longitude) {
            searchByLocation(this.props).then(results => {
                console.log(typeof(results))
                this.setState({
                    businesses: results
                })
            })
        }
    }

    renderCard = (card, index) =>{

    }

    onSwipedAllCards = () => {
        this.setState({
          swipedAllCards: true
        })
      };

    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    cards={this.state.businesses}
                    renderCard={(card) => {
                        return (
                            <View style={styles.card}>
                                <Text style={styles.text}>{card.name}</Text>
                            </View>
                        )
                    }}
                    onSwiped={(cardIndex) => { console.log(cardIndex) }}
                    onSwipedAll={() => { console.log('onSwipedAll') }}
                    cardIndex={0}
                    backgroundColor={'#4FD0E9'}
                    stackSize={3}
                    overlayLables={{
                        bottom: {
                            element: <Text>BLEAH</Text>, /* Optional */
                            title: 'BLEAH',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }
                            }
                        },
                        left: {
                            element: <Text>NOPE</Text>, /* Optional */
                            title: 'NOPE',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start',
                                    marginTop: 30,
                                    marginLeft: -30
                                }
                            }
                        },
                        right: {
                            element: <Text>LIKE</Text>, /* Optional */
                            title: 'LIKE',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    marginTop: 30,
                                    marginLeft: 30
                                }
                            }
                        },
                        top: {
                            element: <Text>SUPER</Text>, /* Optional */
                            title: 'SUPER LIKE',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }
                            }
                        }
                    }}
                >
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
      backgroundColor: '#F5FCFF'
    },
    card: {
      flex: 1,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#E8E8E8',
      justifyContent: 'center',
      backgroundColor: 'white'
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
