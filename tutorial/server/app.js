
//var MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');

//Create  database :
var url = "mongodb://localhost:27017/sampledb";
const User = require('../model/User')


const express = require('express')
const app = express()
const cors = require('cors');
var bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
app.use(jsonParser)
app.use(bodyParser.urlencoded({
    extended: true
}))


app.use(cors());

//connect to mongoDB

mongoose.connect(url,{useNewUrlParser: true})

//register save to db
app.post('/create',function(req,res){
    let user = new User(req.body)
    user.save()
    .then(() =>{
        res.status(200).json({message:'ok'})
        console.log('ok')
    })
    .catch(err =>{
        res.status(400).json({message:err.message})
        console.log('error')
    })   
})


app.get('/Users', function(req, res){
    res.send(User)
    //console.log(res.json(User))
   //user.find({username :"username" , })
  })









app.listen(3000,function(err){
    console.log('connected to 3000')
})

       
