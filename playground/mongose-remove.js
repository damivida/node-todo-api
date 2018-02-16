const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose'); 
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


/*Todo.remove({}).then((result) => {
    console.log("All removed", result);
}, (err) => {
    console.log(err);
});*/


//Todo.findOneAndRemove
//Todo.findByIdAndRemove

/*Todo.findOneAndRemove({text:"to eat fish"}).then((result) => {
    console.log(result);
});*/

Todo.findByIdAndRemove('5a86146fb8085b7c2c6be28a').then((result)=> {
    console.log(result);
});