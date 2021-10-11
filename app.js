const express = require('express')
const port = process.env.port || 8080
const app = express()

app.get('/users', (req, res) => {
    res.send('Warakorn 61160020')
})

app.listen(port, () => {
    console.log('The app is up and running!')
})
module.exports = app