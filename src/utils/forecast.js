const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url = 'https://api.darksky.net/forecast/891e755933c0de3a2e1cf612586158bf/' + latitude + ',' + longitude + '?units=si';
    request({ url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather service!')
        }else if (body.error) {
            callback('Unable to find location!')
        } 
        else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability * 100}% chance of rain. humidity is ${body.currently.humidity *100}%`
            )
        }
    })
}

module.exports = forecast