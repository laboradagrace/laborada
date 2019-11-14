
// //var MongoClient = require('mongodb').MongoClient;
// var mongoose = require('mongoose');
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// var session = require('express-session');
// //Create  database :
// var url = "mongodb://localhost:27017/sampledb";
// const User = require('../model/User')


// const express = require('express')
// const app = express()
// const cors = require('cors');
// var bodyParser = require('body-parser')
// const jsonParser = bodyParser.json();
// app.use(jsonParser)
// app.use(bodyParser.urlencoded({
//     extended: true
// }))


// // app.use(session({
// // 	secret: 'secret',
// // 	resave: true,
// // 	saveUninitialized: true
// // }));


// app.use(cors());

// //connect to mongoDB

// mongoose.connect(url,{useNewUrlParser: true})

// //register save to db
// app.post('/create',function(req,res){
//     let user = new User(req.body)
//     user.save()
//     .then(() =>{
//         res.status(200).json({message:'ok'})
//         console.log('ok')
//     })
//     .catch(err =>{
//         res.status(400).json({message:err.message})
//         console.log('error')
//     })   
// })

// app.get('/auth', function(req, res){
//     var Username = req.body.username;
//     var Password = req.body.password
    
//     User.findOne({username :Username},{_id: 0,password: 1 }, function(err,user){
//         if(err){
//             res.send("error")
//         }
//         if(user){
//             if(user.password == Password){
//                 res.send("ok")
//             }
//         }
//     })
     
    

// });

// app.listen(3000,function(err){
//     console.log('connected to 3000')
// })
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/sampledb');
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// serve static files from template
app.use(express.static(__dirname + '/src'));

// include routes
var routes = require('../routes/router');
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});

       
