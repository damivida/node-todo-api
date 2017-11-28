//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
   
  //deleteMany
  /* db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
       console.log(result);
   });*/
      
  //deleteOne
 /*   db.collection('Todos').deleteOne({text: 'Runing blind'}).then((result) => {
        console.log(result);
    });*/
    
    
  //findeOneAndDelete    
/*     db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result); 
     });*/
    
    
    //chalange delete many
    db.collection('Users').deleteMany({name: 'Damir'}).then((result) => {
        console.log(result);
    });
    
    
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5a142b9b98051a1684cd4e6c')
    }).then((result) => {
        console.log(result);
    });
    //db.close();
    
});