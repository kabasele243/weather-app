const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const app = express()

//Define paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

console.log(publicDirectory)
console.log(viewsPath)
//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


//Static directory
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather"
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        helpText: 'This is some helpful text.'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: "About"
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address) {
         return res.send({
            error: 'You must provide an address'
        })
    }

    geocode(req.query.address, ( error, data) => {
        if(error){
            return res.send({ error })
        }
        console.log(data)
    
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return res.send({ error })
            }
            // console.log(data.location)
            // console.log(forecastData)
            res.send({
                forecast: forecastData,
                location: data.location,
                address: req.query.address
                
            })
        } )
     })
    
    
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: "Help not found"
    })
})

app.get("*", (req, res) => {
    res.render('404', {
        errorMessage: 'Page not found'
    })
})
app.listen(3000, () => {
    console.log('Server is up running on port 3000')
})