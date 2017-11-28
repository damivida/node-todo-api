//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
    
    // change names
/*  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('5a14498aa8903f04f84b4aa8')
  }, {
      $set: {
      name: 'Neptun'
     }
  }, {
      returnOriginal: false
  }).then((result) => {
      console.log(result);
  }); */   
  
    
    //increment years
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a1447688fc2f52e4ce46a5d')
    }, {
        $inc: {
            age: -5
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    
    
    //db.close();
    
});