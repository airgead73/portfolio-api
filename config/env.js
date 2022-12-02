/* GENERAL ENVIRONMENT */
const isDev = process.env.NODE_ENV === 'development';
/* DB */
const mongoURI = process.env.MONGO_URI + process.env.MONGO_DBNAME;
const mongoNAME = process.env.MONGO_DBNAME;

/* Check Variables */
if(!mongoURI) {
  throw new Error('.env is missing MONGO_URI environment variable.');
}

if(!mongoNAME) {
  throw new Error('.env is missing MONGO_DBNAME environment variable.');
}

module.exports = {
  mongoURI,
  mongoNAME
}