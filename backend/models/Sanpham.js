const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Sanpham = new Schema({
   MaSanPham:{type:String},
   TenSanPham:{type:String},
   MauSac:{type:String},
   GioiTinh:{type:String},
   ThuongHieu:{type:String},
   KhuyenMai:{type:Number},
   Gia:{type:Number},
   HinhAnh:{type:String}
}, {
   collection: 'sanphams'
})

module.exports = mongoose.model('Sanpham', Sanpham)