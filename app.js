var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
// var logger = require('morgan');
var cors = require('cors')
var graphqlMiddleware = require('./graphql');
var authMiddleware = require('./middleware/auth.middleware');
var delay = require('./middleware/delay');

var Course = require('./models/shared/course');

var app = express();

app.use(cors())
// app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/graphql', authMiddleware, graphqlMiddleware);

app.get('/', function(req, res, next){
  res.send('Express App!'+ process.env.DB_CONN)
});

// mongoose.connect('mongodb+srv://vishal:vishal@studentcluster-k7i07.mongodb.net/eduerp?retryWrites=true&w=majority', 
mongoose.connect(process.env.DB_CONN || 'mongodb://localhost:27017/eduerp?retryWrites=true', 
{ 
  useNewUrlParser: true,
  //useCreateIndex:true 
});

module.exports = app;
