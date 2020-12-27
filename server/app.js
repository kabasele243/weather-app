const path = require('path')
const express = require('express')


const app = express()
const publicDirectory = path.join(__dirname, './public')

app.use(express.static(publicDirectory))



app.get('/help', (req, res) => {
    res.send('Help Page')
})
app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send('Weather')
})


app.listen(3000, () => {
    console.log('Server is up running on port 3000')
})