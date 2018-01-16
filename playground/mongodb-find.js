//const MongoClient = require('mongodb').MongoClient;

//--calling mbd with object destruction method
const {MongoClient, ObjectID} = require('mongodb');


//--CONNECTING TO DATABSE
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    
    console.log('Connected to MongoDB server');
    
    //--declearing db 
    const myDb = db.db('TodoApp');

    
    
    /*  myDb.collection('Todos').find({
      _id: new ObjectID('5a14506a7a492bc44699e1db')
  }).toArray().then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
     console.log('Unable to fetch todos', err); 
  });*/
      
    
/*     myDb.collection('Todos').find({
  }).count().then((count) => {
      console.log(`Todos count: ${count}`);
  }, (err) => {
     console.log('Unable to fetch todos', err);
});    
    */
    
    
    
    
myDb.collection('Users').find({
    name: "Vidix"
}).toArray().then((docs) => {
   console.log('Query for my name:');
   console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('Unable to fetch todos');
});
    
    //db.close();
    
});