const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Khachhang = new Schema({
   MaKhachHang:{
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
   DiaChi:{
       type:String
   }
}, {
   collection: 'khachhangs'
})

module.exports = mongoose.model('Khachhang', Khachhang)