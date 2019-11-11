const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Quyen = new Schema({
   ID:{
       type:Number
   },
   Admin:{type:Number},
   KhachHang:{type:Number},
   SanPham:{type:Number},
   DonHang:{type:Number},
   TinTuc:{type:Number},
   MieuTa:{type:String}
}, {
   collection: 'quyens'
})

module.exports = mongoose.model('Quyen', Quyen)