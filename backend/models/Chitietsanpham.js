const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Chitietsanpham = new Schema({
   MaSanPham: {
      type: String
   },
   Size: {
      type: Number
   },
   SoLuong: {
      type: Number
   },
  
}, {
   collection: 'chitietsanphams'
})

module.exports = mongoose.model('Chitietsanpham', Chitietsanpham)