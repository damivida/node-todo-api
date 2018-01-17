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
    
    //--INSERTING DATA(callBack function)
/*    myDb.collection('Todos').insertOne({
        text: 'Something to do',
        compleated: false
    }, (err, result) => {
        if(err) {
         return console.log('Unable to insert data into todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/
    
/*    myDb.collection('Users').insertOne({
        name: 'Vidix',
        age: 33,
        location: 'Associal Dell'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user', err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    });
    */
    
    
    //--INSERTING DATA(promise function)
/*myDb.collection('Todos').insertOne({
    text: "Go to backary",
    completed: false
}).then((result) => {
    console.log(result);
}, (err) => {
    console.log('Unabel to write document', err);
});    
    */
   // db.close();
});