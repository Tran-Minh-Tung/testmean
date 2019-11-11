const express = require('express');
const app = express();
const khachhangRoute = express.Router();
const chitietdonhangRoute=express.Router();
const donhangRouter=express.Router();

// Khachhang model
let Khachhang = require('../models/Khachhang');
let Chitietdonhang=require('../models/Chitietdonhang');
let Donhang=require('../models/Donhang');

// Add Khachhang
khachhangRoute.route('/create').post((req, res, next) => {
  Khachhang.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Khachhangs
khachhangRoute.route('/').get((req, res) => {
  Khachhang.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single khachhang
khachhangRoute.route('/read/:MaKhachHang').get((req, res) => {
  Khachhang.findById(req.params.MaKhachHang, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update khachhang
khachhangRoute.route('/update/:MaKhachHang').put((req, res, next) => {
  Khachhang.findByIdAndUpdate(req.params.MaKhachHang, {
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

// Delete khachhang
khachhangRoute.route('/delete/:MaKhachHang').delete((req, res, next) => {
  Khachhang.findOneAndRemove(req.params.MaKhachHang, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = khachhangRoute;