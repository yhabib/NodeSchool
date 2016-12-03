var mongo = require('mongodb').MongoClient,
    url = "mongodb://localhost:27017/",
    dbName = process.argv[2],
    collection = process.argv[3],
    id = process.argv[4];

mongo.connect(url + dbName, (err, db) => {
  if(err) throw err;

  db.collection(collection)
    .remove(
      { _id: id }, err => {
        if(err) throw err;
        db.close();
      }
    );
});
