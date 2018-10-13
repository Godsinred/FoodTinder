import React, { Component} from 'react';
// import NavBar from './navbar';
import { Platform, StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';
import searchByLocation  from '../../YelpApi/YelpApiFunctions';

const component1 = () => <Text>Hello</Text>
const component2 = () => <Text>World</Text>
const component3 = () => <Text>ButtonGroup</Text>

export default class MatchViewContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardStack: [], 
            location: this.props.location
        };
    }

    // componentWillMount() {
    //     searchByLocation(this.props.location).then(results => {
    //         results.business.forEach(business => {
    //             this.state.cardStack.push(this.createCard(business))
    //         })
    //     })
    // }

    componentWillReceiveProps(nextProps) {
        // update original states
        this.setState({
          location: nextProps,
        });
    }

    createCard(business) {
        console.log(`Card created for ${business.name}`);
        return business.id;
    }

    render() {
        const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
        return (
            <View>
                <Text>MatchViewContainer</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    buttonGroup: {
        justifyContent: 'flex-end'
    }
})

MatchViewContainer.propTypes = {
    latitude: PropTypes.number,
    longitude: PropTypes.number
}