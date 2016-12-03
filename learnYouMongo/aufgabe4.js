var mongo = require('mongodb').MongoClient,
    url = "mongodb://localhost:27017/learnyoumongo",
    ageMin = parseInt(process.argv[2]);

// PROJECTION -> Return some values from a document
mongo.connect(url, (err, db) => {
  if(err) throw err;

  db.collection('parrots')
    .find(
      { age: { $gt: +ageMin } },
      { name: 1, age: 1 , _id: 0, }
    )
    .toArray((err, docs) => {
      if(err) throw err;
      console.log(docs);
      db.close();
    });
});
