const express = require('express');
const app = express();
var cookieParser = require('cookie-parser')
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { ObjectID } = require('bson');
const dbName = "db-name";
const collectionName = "users";
const API_KEY = process.env.API_KEY;
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
const mongoKey = process.env.MONGO_PASSWORD;
app.use(cookieParser());
const { MongoClient } = require('mongodb');


const uri = `mongodb+srv://sjmoghe:` + mongoKey + `@cluster0.rcrdd.mongodb.net/db-name?retryWrites=true&w=majority`;
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

        app.post('/api/inventory/:userId/add-space', async (req, res) => {
            try {
                console.log("received the add space command --> " + req.body.space.name);
                console.log(req.body.space);
                const spaceName = req.body.space.name;
                const space = req.body.space;
                const userId = req.params.userId;
                console.log("user id from user --> " + userId);

                const user = await collection.findOne({email: userId});
                console.log(user);
                let spaces = [];

                if (user.spaces) {
                    user.spaces.forEach(spaceInList => {
                        if (spaceInList.name === spaceName) {
                            return res.sendStatus(405);

                        }
                    } );
                    spaces = [...user.spaces, space];
                }
                else {
                    console.log(space);
                    spaces.push(space);
                }


                const modifyUser = await collection.updateOne(user, {$set : {"spaces": spaces }});
                return res.sendStatus(200);

            }
            catch(err) {
                console.log(err);
            }
        });


        app.get('/api/inventory/:userId/spaces', async (req, res) => {
            try {
                const userId = req.params.userId;

                const user = await collection.findOne({email: userId});
                if (user.spaces) {
                    return res.send(user.spaces);
                }
                else {

                    return res.send([]);
                }

            } catch (err) {
                throw (err);
            }

        });
        /** End of the mongoclients */


    } catch (e) {
        console.error(e);
        console.log("Closing mongoclient");
        await mongoClient.close()
    }
}

main()
