 var mongoose = require('mongoose');

//-setting up promise library
mongoose.Promise = global.Promise;

//--connection to database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');


module.exports = {mongoose};