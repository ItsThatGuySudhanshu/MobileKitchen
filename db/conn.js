const { MongoClient } = require('mongodb');

async function main() {
    const uri = `mongodb+srv://sjmoghe:12345@cluster0.rcrdd.mongodb.net/db-name?retryWrites=true&w=majority`;
    const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await mongoClient.connect();
        console.log("Connected correctly to server");
    } catch (e) {
        console.error(e);
    } finally {
        await mongoClient.close()
    }
 }

 main();