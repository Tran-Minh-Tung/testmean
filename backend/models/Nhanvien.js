const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Nhanvien = new Schema({
   MaNhanVien:{
       type:String
   },
  HoTen:{
       type:String
   },
  Email:{
       type:String
   },
  SDT:{
       type:Number
   },
  IDQuyen:{
       type:Number
   }
}, {
   collection: 'nhanviens'
})

module.exports = mongoose.model('Nhanvien', Nhanvien)