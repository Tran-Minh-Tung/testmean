const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
   ID:{type:Number},
   Pass:{type:String},
   Quyen:{type:Number}
}, {
   collection: 'users'
})

module.exports = mongoose.model('User', User)