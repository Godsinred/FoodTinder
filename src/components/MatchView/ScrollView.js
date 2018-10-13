import React, { Component } from 'react';
// import NavBar from './navbar';
import { Platform, StyleSheet, Text, View, Button, FlatList, List, ListItem } from 'react-native';
import PropTypes from 'prop-types';
import { getReview } from '../../YelpApi/YelpApiFunctions';

export default class ScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
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

  componentWillMount(){
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
          renderItem={({ item }) => <Text>{`${item.user.name} ${item.text}`}</Text>}
          keyExtractor={(item, index) => item.id}
        // extraData={this.state}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    alignItems: 'stretch',
    backgroundColor: 'powderblue'
  }
});
