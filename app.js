const request = require('request');



// const url =`http://api.weatherstack.com/current?access_key=02bab3434a1b4a0b7d482783f83f928e&query=37.8267,-122.4233&units=f`

// request({ url: url, json: true}, (error, response) => {
//     //    const data = JSON.parse(response.body)
//     //    console.log(response.body.current)

//     if(error){
//         console.log('Unable to connect to weather service')
//     } else if(response.body.error){
//         console.log('Unable to find location')
//     } else {
//         console.log(`It's currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out`)
//     }
// })


// // Geocoding
// const urli =`https://api.mapbox.com/geocoding/v5/mapbox.places/Atlanta.json?limit=2&access_token=pk.eyJ1Ijoia2FiYXNlbGUyNDMiLCJhIjoiY2s5ZGE2ZDFrMDFsbTNkcnRvYWoxdHo0OSJ9.1oJMXawyyImZjxGr-3SK5w&limit=1`

// request({ url: urli, json: true}, (error, response) => {
//     if(error){
//         console.log('unable to connect')
//     } else if(response.body.features.length === 0){
//         console.log('Please provie valid input')
//     } else {
//         // const coordinate = response.body.features[0].geometry.coordinates
//         console.log(response.body)
//     }
        
// })


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
                    latitude: response.body.features[0].center[0],
                    longitude: response.body.features[0].center[1],
                    location: response.body.features[0].place_name
                }
                )
            }
    })
  
}


geocode('Hiram', ( error, data) => {
    console.log(data)
})