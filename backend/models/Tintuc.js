const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Tintuc = new Schema({
   MaTinTuc:{type:String},
   TieuDe:{type:String},
   NoiDung:{type:String},
   HinhAnh:{type:String}
}, {
   collection: 'tintucs'
})

module.exports = mongoose.model('Tintuc', Tintuc)