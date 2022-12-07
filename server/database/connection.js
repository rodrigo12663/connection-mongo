const {MongoClient} = require("mongodb")

const url = "mongodb://localhost:27017/notesDB"

const getDB = async () =>{
    return await MongoClient.connect(url);
}

module.exports = {
    getDB
 }

