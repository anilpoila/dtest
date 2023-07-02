const { MongoClient } = require("mongodb");
const _dbConnections = require("../cnfgstngs/settings");
const client = new MongoClient(_dbConnections["set_one"]["db_string"]);

async function main(ctrl) {
  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(_dbConnections["set_one"]["db_name"]);
    const collection = db.collection(ctrl);
    // Retrieve all documents from the collection
    const documents = await collection.find().toArray();
    return documents;
  } catch (error) {
    console.error("Error connecting to the server:", error);
  }
}

module.exports = {
  client: client,
  keys: main,
};
