const request = require('request');


const geocode = (address, callback) => {
    const urli =`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=2&access_token=pk.eyJ1Ijoia2FiYXNlbGUyNDMiLCJhIjoiY2s5ZGE2ZDFrMDFsbTNkcnRvYWoxdHo0OSJ9.1oJMXawyyImZjxGr-3SK5w&limit=1`
        request({ url: urli, json: true}, (error, response) => {
            if(error){
                callback('Unable to connect to location services')
            } else if(response.body.features.length === 0){
                callback('Please provie valid input')
            } else {
                // const coordinate = response.body.features[0].geometry.coordinates
                // console.log(response.body)

                callback(undefined, {
                    latitude: response.body.features[0].center[1],
                    longitude: response.body.features[0].center[0],
                    location: response.body.features[0].place_name
                }
                )
            }
    })
  
}

module.exports = geocode;