var mongo = require('mongodb').MongoClient,
    url = "mongodb://localhost:27017/learnyoumongo",
    name = process.argv[2];

mongo.connect(url, (err, db) => {
  if(err) throw err;

  db.collection('users')
    .update(
      { username: "tinatime" },
      { $set: {age: 40} }, err => {
        if(err) throw err;
        db.close();
      }
    );
});
