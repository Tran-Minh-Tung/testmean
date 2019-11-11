const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Donhang = new Schema({
  
   MaDonHang:{
       type:String
   },
   Ngay:{
       type:Date
   },
   MaNguoiDat:{
       type:String
   },
   TongTien:{
       type:Number
   },
  TinhTrang:{
       type:String
   }
}, {
   collection: 'donhangs'
})

module.exports = mongoose.model('Donhang', Donhang)