const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e66c881b07cf41e5167a02a53115241b&query=12.66492,123.87398&units=f'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect weather services!')
    } else {
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.current.temperature + " degrees out. It feels like " + response.body.current.precip + ' degrees out')
    }
})

// Geocoding
// Address -> Lat/Long -> Weather


//const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2Fzc2llMDkxMiIsImEiOiJja3ZidTJ6azQyd3kwMm5wNnZwOGozYW1rIn0.lqVpgolymMR0xjbq0QQZgg&limit=1'

//request({ url: geocodeURL, json: true }, (error, response) => {
//    const latitude = response.body.features[0].center[0]
//   const longitude = response.body.features[0].center[1]
//   console.log(latitude, longitude)
// })