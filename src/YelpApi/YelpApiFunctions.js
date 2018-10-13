import axios from 'axios';

const businessSearch = 'https://api.yelp.com/v3/businesses/search';
const businessDetails = 'https://api.yelp.com/v3/businesses/';
const apiKey = 'a_IHoeZF1KZ_fhIsvoJW4-JF-r1TZnDY--wKtRLCiBQMqHcEqGpI2OLoTHfzKPZvl3iVQwm-IEjqwD7xofN_pRDTwMSIicYfZiy0WcNNlxpqvBoEfZjtIgT_p8_gWnYx';
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
        return response.data;
    }).catch(err => {
        console.log('You fucked up: ' + err);
    })
}

function getReview(businessId){
    return axios.get(businessDetails + businessId + '/reviews', {
        headers: auth
    }).then((response) =>{
        return response.reviews;
    }).catch( err =>{
        console.log(err.message);
    })
}

export {getBusinessDetails, searchByLocation};