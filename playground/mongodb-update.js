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

/*    myDb.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5a5dd900965038029dbcab0c")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });*/
    
    
    // challange
    
   myDb.collection('Users').findOneAndUpdate({
       _id: new ObjectID("5a57534dc4387615186cc915")
   }, {
       $set: {
           name: "Dr. Bashire"
       },
       $inc: {
           age: -1
       }
   }, {
       returnOriginal: false
   }).then((result) => {
       console.log(result);
   });
    
    //db.close();
    
});