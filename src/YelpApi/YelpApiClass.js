//Use when in React Native
import axios from 'axios';

//use when testing in terminal
// var axios = require('axios')

module.exports = class YelpApi{
    constructor(){
        this.businessSearch = 'https://api.yelp.com/v3/businesses/search';
        this.businessDetails = 'https://api.yelp.com/v3/businesses/';
        this.apiKey = 'a_IHoeZF1KZ_fhIsvoJW4-JF-r1TZnDY--wKtRLCiBQMqHcEqGpI2OLoTHfzKPZvl3iVQwm-IEjqwD7xofN_pRDTwMSIicYfZiy0WcNNlxpqvBoEfZjtIgT_p8_gWnYx'
            //cause who cares about security amirite
        this.auth = {
            'Authorization': 'Bearer '+ this.apiKey
        }
    }

    /**
     * returns a promise. use like
     * var api = new YelpApi();
     * api.searchByLocation({...}).then(data =>{
     *          do stuff with data
     * })
     * @param {object} location {longitude: decimal, latitude: decimal}
     */
    searchByLocation(location){
        if (location.latitude === undefined || location.longitude === undefined) {
            throw 'Longitude and Latitude must be defined. Use Expo.Location.getCurrentPositionAsync'
        };
        let options = {
            latitude: location.latitude,
            longitude: location.longitude,
        };
        
        return axios.get(this.businessSearch,{
                params: options,
                headers: this.auth
            }).then((response, reject) =>{
                // uncomment for debugging!
                // console.log(response.data);
                return response.data;
            }).catch(err =>{
                console.log('You fucked up: '+ err);
            })
    }

    getBusinessDetails(businessId){
        return axios.get(this.businessDetails + businessId,{
            headers: this.auth
        }).then((response, reject) =>{
            // uncomment for debugging!
            // console.log(response.data);
            return response.data;
        }).catch(err =>{
            console.log('You fucked up: '+ err);
        })
    }
}
