const { MongoClient } = require('mongodb');
const { mongoURI, mongoNAME: dbName } = require('./env');
const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,  
});

let dbConnection;

const connectToServer = async function() {

  await client.connect();
  dbConnection = client.db(dbName);
  console.log('Successfully connected to database');

}

const getDB = function() {
  return dbConnection;
}


module.exports = {
  connectToServer,
  getDB
};
