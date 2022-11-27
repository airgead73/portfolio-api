const { MongoClient } = require('mongodb');
const { mongoURI } = require('../config/env');

const INIT = async(cb) => {

  let dbConnection;

  try {

    dbConnection = await MongoClient.connect(mongoURI + 'db_v1');
    console.log('Successfully connected to MongoDD.');
    return cb()

  } catch(err) {
    console.log(err)
  } finally {
    dbConnection.close();
  }

}

const CONNECT = async() => {

  let db;

  try {

    db = await MongoClient.connect(mongoURI + 'db_v1');
    return db;

  } catch(err) {
    console.log(err)
  } 

}

const READ = async($collection) => {


  try {

    const db = await CONNECT();
    const collection = db.collection($collection);
    const data = await collection.find({}).toArray();

    return data;

  } catch(err) {
    console.log(err);
  } finally {
    db.close();
  }

}

module.exports = {
  INIT,
  READ
}