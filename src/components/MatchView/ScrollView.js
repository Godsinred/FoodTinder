import React, { Component } from 'react';
// import NavBar from './navbar';
import { Platform, StyleSheet, Text, View, Button, FlatList, List, ListItem } from 'react-native';
import PropTypes from 'prop-types';
import { getReview } from '../../YelpApi/YelpApiFunctions';

export default class ScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  createFlatList(business) {
    console.log(business.id)
    getReview(business.id).then(response => {
      this.setState({
        reviews: response
      })
    })
  }

  componentWillMount() {
    getReview(this.props.businessId).then(response => {
      this.setState({
        reviews: response
      })
    })
  }

  componentDidUpdate(oldProps) {
    if (this.props.businessId !== oldProps.businessId) {
      getReview(this.props.businessId).then(response => {
        this.setState({
          reviews: response
        })
      })
    }
  }

  render() {
    return (
      <View style={styles.scrollView}>
        <FlatList
          data={this.state.reviews}
          renderItem={({ item }) =>
            <View>
              <View style={styles.userInfoContainer}>
                <Text
                  style={styles.name}>
                  {item.user.name}
                </Text>
                <Text
                  style={styles.rating}>
                  {item.rating}
                </Text>
              </View>
              <Text style={{left:3}}>{item.text}{'\n'}</Text>
            </View>
          }
          keyExtractor={(item, index) => item.id}
        // extraData={this.state}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scrollView: {
    flex: 1,
    alignItems: 'stretch',
    //backgroundColor: 'powderblue'
  },
  name:
  {
    fontSize: 14,
    fontWeight: 'bold',
    left: 3
  },
  rating: {
    textAlign: 'right',
    right: 3
  }

});
