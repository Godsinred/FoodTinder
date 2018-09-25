const request = require('request');
const querystring = require('querystring')

const BUSINESS_SEARCH = 'https://api.yelp.com/v3/businesses/search?'
const BUSINESS_DETAILS = 'https://api.yelp.com/v3/businesses/'
const API_KEY = 'a_IHoeZF1KZ_fhIsvoJW4-JF-r1TZnDY--wKtRLCiBQMqHcEqGpI2OLoTHfzKPZvl3iVQwm-IEjqwD7xofN_pRDTwMSIicYfZiy0WcNNlxpqvBoEfZjtIgT_p8_gWnYx'

module.exports = {
    /**
     * returns a json list of businesses sorted by location. Ideally, this should be called in a Promise / async function
     * @param location: a location object returned from Expo.Location.getCurrentPositionAsync
     * @returns an array of businesses
     */
    businessSearchByLocation: function(location){
        if(location.latitude === undefined || location.longitude === undefined){
            throw 'Longitude and Latitude must be defined. Use Expo.Location.getCurrentPositionAsync'
        }
        let options = {
            url: BUSINESS_SEARCH,
            method: 'GET',
            headers:{
                authorization: 'Bearer ' + API_KEY
            },
            qs:{latitude: location.latitude, longitude: location.longitude}
        };
        return new Promise(()=>{
            return request(options, (err, res, body) =>{
                return JSON.parse(body);
            })
        })
    },
}