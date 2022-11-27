const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DBNAME;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,  
});

let dbConnection;

const connectToServer = function(callback) {
  client.connect(function (err, db) {
    if (err || !db) {
      return callback(err);
    }

    dbConnection = db.db(dbName);
    console.log('Successfully connected to MongoDB.');

    return callback();
  });
}

const getDb = function() {
  return dbConnection;
}

module.exports = {
  connectToServer,
  getDb
};
