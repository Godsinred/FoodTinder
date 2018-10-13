import axios from 'axios';

const businessSearch = 'https://api.yelp.com/v3/businesses/search';
const businessDetails = 'https://api.yelp.com/v3/businesses/';
const apiKey = 'ljxk8Nt7OSlg7fcOwS7qNUXqzw4x-vyR_Llo4VTLJz1XsBJJA42vemfYiJgVWH0jC6uiM4ptqsFlCvb1iZ-ATT7NHbTqHozCJVBYEhOkbcp8cum5E5a7R5gIlzjCW3Yx';
const auth = {
    'Authorization': 'Bearer ' + apiKey
}

function getBusinessDetails(businessId){
    return axios.get(businessDetails + businessId, {
        headers: auth
    }).then((response, reject) => {
        // uncomment for debugging!
        // console.log(response.data);
        return response.data;
    }).catch(err => {
        console.log('You fucked up: ' + err);
    })
}

function searchByLocation(location){
    console.log('searching')
    if (location.latitude === undefined || location.longitude === undefined) {
        throw 'Longitude and Latitude must be defined. Use Expo.Location.getCurrentPositionAsync'
    };
    let options = {
        latitude: location.latitude,
        longitude: location.longitude,
    };

    return axios.get(businessSearch, {
        params: options,
        headers: auth
    }).then((response, reject) => {
        // uncomment for debugging!
        // console.log(response.data);
        return response.data.businesses;
    }).catch(err => {
        console.log('You fucked up: ' + err);
    })
}

function getReview(businessId){
    return axios.get(businessDetails + businessId + '/reviews', {
        headers: auth,
        limit: 3
    }).then((response) =>{
        return response.data.reviews;
    }).catch( err =>{
        console.log(err.message);
    })
}

export {getBusinessDetails, searchByLocation, getReview};
