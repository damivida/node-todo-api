var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    
    todo.save().then((doc) => {
       res.send(doc); 
    },(err) => {
        res.status(400).send(err);
    });
});


app.post('/users', (req, res) => {
    var user = new User ({
        email: req.body.email
    });
    
    user.save().then((doc)=> {
        res.send(doc);
    },(err) => {
        res.status(400).send(err);
    });
});


app.get('/todos', (req, res) => {
   Todo.find().then((todo) => {
       res.send({todo});
   }, (err) => {
       res.status(400).send(err);
   });
});


//CHALANGE
//GET /todos/123456
//Validate id using isValid
//404- send
//query find by id
//success
// if totdo -sed it back
// ifn no todo 404 with empty body
//error
//400 -send empty body back


app.get('/todos/:id',(req, res) => {
    
    var id = req.params.id;
    
    //validateing ID
    if(!ObjectID.isValid(id)) {
       return res.status(404).send("ID is not valid");
    }
    //finding id in database
    Todo.findById(id).then((todo) => {
        if(!todo) {
             return res.status(404).send("That user is not in database");
        }
        
        res.send({todo});
    }, (err) => {
        res.status(400).send(err);
    });
});
 

app.listen(port, () => {
    console.log(`Started up at port ${port}`);  
});


module.exports = {app};

//











