const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DBNAME;
const client = new MongoClient(uri, {
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
