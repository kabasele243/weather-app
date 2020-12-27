const express = require('express')


const app = express()

app.get('', (req, res) => {
    res.send('Brooooo')
})

app.get('/help', (req, res) => {
    res.send('Help Page')
})
app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/weather', (req, res) => {
    res.send('Weather')
})


app.listen(3000, () => {
    console.log('Server is up running on port 3000')
})