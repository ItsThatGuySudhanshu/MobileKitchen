const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')
const axios = require('axios');
const cors = require('cors');
const { ObjectID } = require('bson');
const dbName = "db-name";
const collectionName = "users";
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const { MongoClient } = require('mongodb');


const uri = `mongodb+srv://sjmoghe:12345@cluster0.rcrdd.mongodb.net/db-name?retryWrites=true&w=majority`;
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db(dbName);
        const collection = db.collection(collectionName);
        console.log("Connected correctly to server");



        app.listen(PORT, function() {
            console.log(`listening on ${PORT}...`)
        })


        app.get('/', (req, res) => {
            console.log("receiving requests");

            return res.send('Received a GET HTTP method');
        });

        /** End of the mongoclients */


    } catch (e) {
        console.error(e);
        console.log("Closing mongoclient");
        await mongoClient.close()
    }
}

main()
