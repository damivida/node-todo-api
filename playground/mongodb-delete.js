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

    //--deleteMany
/*    myDb.collection('Todos').deleteMany({
        text: "Eat lunch"
    }).then((result)=> {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete document', err);
    });*/
    
    
    //--deleteOne
/*    myDb.collection('Todos').deleteOne({
        text: "Go to backary"
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete an document', err);
    });
    */
    
    //--findOneAndDelete
/*    myDb.collection('Todos').findOneAndDelete({
        text: "Go to backary",
        completed: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log("Unable to delete an document");
    });*/
    
    
    //--chalenge
    
    //-- delereMany by name
/*    myDb.collection('Users').deleteMany({
        name: "Vidix"
    }).then((result)=> {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete docuent', err);
    });*/
    
    //-- findOneAndDelete by ID
    myDb.collection('Users').findOneAndDelete({
        _id: new ObjectID("5a574b407e6fec06f8711faf")
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to find and delete document', err);
    });
    
    
    
    //db.close();
    
});