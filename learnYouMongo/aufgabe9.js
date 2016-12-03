var mongo = require('mongodb').MongoClient,
    url = "mongodb://localhost:27017/learnyoumongo",
    size = process.argv[2],
    avg;

mongo.connect(url, (err, db) => {
  if(err) throw err;

  db.collection('prices')
    .aggregate([
      {$project: {name:1, size: 1, price: 1, _id:0}},
      {$match: {size: size}},
      {$group: {_id: "$average", avg_price: {$avg: "$price"}}}
    ]).toArray((err, results) => {
      if(err) throw err;
      if(results.length === 0) console.log("No results found");

      console.log(Number(results[0]["avg_price"]).toFixed(2));

      db.close();
    });
});
