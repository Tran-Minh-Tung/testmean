const express = require('express');
const app = express();
const nhanvienRoute = express.Router();

// Nhanvien model
let Nhanvien = require('../models/Nhanvien');

// Add Nhanvien
nhanvienRoute.route('/create').post((req, res, next) => {
  Nhanvien.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Nhanviens
nhanvienRoute.route('/').get((req, res) => {
  Nhanvien.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single nhanvien
nhanvienRoute.route('/read/:MaNhanVien').get((req, res) => {
  Nhanvien.findById(req.params.MaNhanVien, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update nhanvien
nhanvienRoute.route('/update/:MaNhanVien').put((req, res, next) => {
  Nhanvien.findByIdAndUpdate(req.params.MaNhanVien, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete nhanvien
nhanvienRoute.route('/delete/:MaNhanVien').delete((req, res, next) => {
  Nhanvien.findOneAndRemove(req.params.MaNhanVien, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = nhanvienRoute;