const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose'); 
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//var id = "5a7226320dc61af43e1d586511";


/*if(!ObjectID.isValid(id)) {
    console.log('ID not valide');    
}*/

/*Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});*/


/*Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    
     console.log('Todo', todo);
}).catch((e) => console.log(e));*/

//CHALLANGE

var id = "5a610e3697244db028074fe3";

User.findById(id).then((user) => {
    if(!user) {
        return console.log("User not found");
    }
    console.log(JSON.stringify(user, undefined,2));
}, (err) => {
    console.log(err);
});


Todo.find({
    text: "First test tod"
}).then((todo) => {
    if(!todo) {
        return console.log("Todo cannot be found");
    }
    console.log(JSON.stringify(todo, undefined, 2));
}, (err) => {
    console.log('Cannot get requested todo', err);
});









