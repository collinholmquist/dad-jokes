const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

connectionString = 'mongodb+srv://dadjokes:<password>@cluster0.jzetn.mongodb.net/<dbname>?retryWrites=true&w=majority'

MongoClient.connect

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function(){
    console.log("listening...")
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/jokes', (req, res) => {
    console.log(req.body)
})


