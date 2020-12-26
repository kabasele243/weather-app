const request = require('request')

const forecast = (latitude, longitude, callback) => {
        const url =`http://api.weatherstack.com/current?access_key=02bab3434a1b4a0b7d482783f83f928e&query=${latitude},${longitude}&units=f`

        request({ url: url, json: true}, (error, response) => {
            //    const data = JSON.parse(response.body)
            //    console.log(response.body.current)

            if(error){
                callback('Unable to connect to weather service', undefined)
            } else if(response.body.error){
                callback('Unable to find location')
            } else {
                callback(undefined, `It's currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out`)
            }
        })
}


module.exports = forecast;