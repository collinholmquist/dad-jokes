const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

connectionString = 'mongodb+srv://dadjokes:uBzL38r@cluster0.jzetn.mongodb.net/dad-jokes?retryWrites=true&w=majority'

MongoClient.connect(connectionString, {useUnifiedTopology: true})
.then(client => 
    {console.log('connected to database')
    const db = client.db('dad-jokes')
    
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


})
.catch(error => console.error(error))




