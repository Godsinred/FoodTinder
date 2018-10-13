import axios from 'axios';
import getData from '../components/utils/fakeData.js'

const businessSearch = 'https://api.yelp.com/v3/businesses/search';
const businessDetails = 'https://api.yelp.com/v3/businesses/';
const apiKey = 'BD6IL5Vj_4CpKGWIphUyClb9rPjBOKc--geP80gEojjFCeDSKpiDuyv_XUW1XIK1oPAy9FtDbSprCBALD7VUTJCIn9MFjwosylLnRD8pIusJ8TE-VwszynCNFTrCW3Yx';
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
        limit: 1
    };

    return axios.get(businessSearch, {
        params: options,
        headers: auth
    }).then((response, reject) => {
        // uncomment for debugging!
        // console.log(response.data);
        console.log(JSON.stringify(response.data.businesses))
        return response.data.businesses;
    }).catch(err => {
        console.log('You fucked up: ' + err);
    })
}

function businessesFromJSON(location){
    console.log('got here');
    return new Promise(resolve =>{
        console.log('inside')
        console.log(getData);
        return fakeData;
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

export {getBusinessDetails, searchByLocation, getReview, businessesFromJSON};
