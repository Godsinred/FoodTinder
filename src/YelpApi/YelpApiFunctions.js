import axios from 'axios';

const businessSearch = 'https://api.yelp.com/v3/businesses/search';
const businessDetails = 'https://api.yelp.com/v3/businesses/';
const apiKey = '3x9-KjtO0tosiOGl5wUI3DAmM9OYogQtkn8wEqLbfAoGzU7dCC1pgAcXbmoRxPXBwOuULLHWGP2QkCFZ5MleAQ3BsTveUihYsElhtd8zw37waJphQZfW8o27hC_CW3Yx';
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
        limit: 5
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
        headers: auth
    }).then((response) =>{
        return response.data.reviews;
    }).catch( err =>{
        console.log(err.message);
    })
}

export {getBusinessDetails, searchByLocation, getReview};
