var mongoose = require('mongoose');

//-setting up promise library
mongoose.Promise = global.Promise;

//--connection to database
mongoose.connect('mongodb://localhost:27017/TodoApp');

//--creating an mongoos Todos model
/*var Todo = mongoose.model('Todo', {
    text: {
       type: String,
       required: true,
       minlength: 1,
       trim: true    
    }, 
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});*/


//--creating and saving some document to data base
/*
var newTodo = new Todo({
    text: 'Go to training'
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (err) => {
    console.log('Unable to save doc', err);
});
*/


//--challange saving an document
/*var secTodo = new Todo({
   text: " Go to sleep"
});

secTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (err) => {
    console.log('Unable to save doc', err);
})*/;




//--challange creating a user model
var user = mongoose.model('user', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});


//-- creating a user
var newUser = new user({
    email: ' vidix.offenzix@gmail.com'
});

newUser.save().then((res) => {
    console.log('User saved', res);
}, (err) => {
    console.log('Unable to save an user', err)
});