var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name:  {
      type: String,
      required: false,
  },
  email:{
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
 
});

// UserSchema.statics.authenticate = function(username, password, callback){
//   User.findOne({username : username})
//   .exec(function (err,user){
//     if(err){
//       return callback(err)
//     }
//     else if(!user){
//       var err = new Error('user not found');
//       err.status = 401;
//       return callback(err);
//     }
//   })
// }
var User = mongoose.model('User',UserSchema);
module.exports = User;