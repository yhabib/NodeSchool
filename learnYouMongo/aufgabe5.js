var mongo = require('mongodb').MongoClient,
    url = "mongodb://localhost:27017/learnyoumongo",
    firstName = process.argv[2],
    lastName = process.argv[3],
    doc = {
      firstName: firstName,
      lastName: lastName
    };

// PROJECTION -> Return some values from a document
mongo.connect(url, (err, db) => {
  if(err) throw err;

  db.collection('docs')
    .insert(doc, function(err, data) {
      if(err) throw err;
      console.log(JSON.stringify(doc));
      db.close();
    });
});
