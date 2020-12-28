const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express config
const publicDirectory = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')


//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
 console.log(partialsPath)

//Static directory
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather"
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help"
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: "About"
    })
})

app.get('/weather', (req, res) => {
    res.send('Weather')
})


app.listen(3000, () => {
    console.log('Server is up running on port 3000')
})