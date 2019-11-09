var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
    // unique: true
  },
  password: {
    type: String,
    required: true
  }
  
  //versionKey: false // You should be aware of the outcome after set to false

 
});

var User = mongoose.model('User',UserSchema);
module.exports = User;