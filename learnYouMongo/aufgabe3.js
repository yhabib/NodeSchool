var mongo = require('mongodb').MongoClient,
    url = "mongodb://localhost:27017/learnyoumongo",
    ageMin = parseInt(process.argv[2]);

// db -> collections -> document
// find() returns a cursor
mongo.connect(url, (err, db) => {
  if(err) throw err;
  var parrots = db.collection('parrots');
  parrots.find({
    age: { $gt: +ageMin }
  }).toArray((err, documents) => {
    if(err) throw err;
    console.log(documents);
    db.close();
  });
});
