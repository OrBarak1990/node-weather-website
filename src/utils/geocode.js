const request = require('request')

const geocode = (asddress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(asddress) + '.json?access_token=pk.eyJ1IjoiYmFyYWtvcjIxIiwiYSI6ImNqeHZzejdoeDAycWEzY3FwMzdkM3ZmN2kifQ.g958xVXwVaD_PE_qrhTY9g&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!')
        } else if (body.features.length === 0){
            callback('Unable to find location, try another search.')
        } else {
            const feature = body.features[0];
            callback(undefined, {
                latitude: feature.center[1],
                longitude: feature.center[0],
                location: feature.place_name
            })
        }
    })
}

module.exports = geocode