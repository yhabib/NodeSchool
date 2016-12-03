var mongo = require('mongodb').MongoClient,
    url = "mongodb://localhost:27017/learnyoumongo",
    ageMin = process.argv[2];

mongo.connect(url, (err, db) => {
  if(err) throw err;

  db.collection('parrots')
    .count(
      { age: {$gt: +ageMin} }, (err, count) => {
        if(err) throw err;
        console.log(count);
        db.close();
      }
    );
});
