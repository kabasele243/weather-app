const path = require('path')
const express = require('express')

const app = express()

//Define paths for Express config
const publicDirectory = path.join(__dirname, './public')
const viewsPath = path.join(__dirname, './templates')


//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Static directory
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: "Makenna"
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: "Makenna"
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: "Makenna"
    })
})

app.get('/weather', (req, res) => {
    res.send('Weather')
})


app.listen(3000, () => {
    console.log('Server is up running on port 3000')
})