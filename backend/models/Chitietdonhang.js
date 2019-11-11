const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Chitietdonhang = new Schema({
   MaChiTietDonHang:{
       type:String
   },
   MaDonHang:{
       type:String
   },
   MaSanPham:{
       type:String
   },
   Size:{
       type:Number
   },
   SoLuong:{
       type:Number
   },
   DonGia:{
       type:Number
   }
}, {
   collection: 'chitietdonhangs'
})

module.exports = mongoose.model('Chitietdonhang', Chitietdonhang)