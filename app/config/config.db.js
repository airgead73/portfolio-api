const { MongoClient } = require('mongodb');
const { mongoURI } = require('./env');

async function main() {

  const client = new MongoClient(mongoURI);

  try {
    await client.connect();
  } catch(err) {
    console.log(err);
  } finally {
    await client.close();
  }

}

main().catch(console.error);
