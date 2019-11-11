const express = require('express');
const app = express();
const sanphamRoute = express.Router();
const chitietsanphamRoute=express.Router();
const chitietdonhangRouter=express.Router();
const donhangRouter=express.Router();
// Sanpham model
let Sanpham = require('../models/Sanpham');
let Chitietsanpham=require('../models/Chitietsanpham');
let Chitietdonhang=require('../models/Chitietdonhang');
let Donhang=require('../models/Donhang');

// Add Sanpham
sanphamRoute.route('/create').post((req, res, next) => {
  Sanpham.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Sanphams
sanphamRoute.route('/').get((req, res) => {
  Sanpham.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single sanpham
sanphamRoute.route('/read/:MaSanPham').get((req, res) => {
  Sanpham.findById(req.params.MaSanPham, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update sanpham
sanphamRoute.route('/update/:MaSanPham').put((req, res, next) => {
  Sanpham.findByIdAndUpdate(req.params.MaSanPham, {
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

// Delete sanpham
sanphamRoute.route('/delete/:MaSanPham').delete((req, res, next) => {
  Sanpham.findOneAndRemove(req.params.MaSanPham, (error, data) => {
    chitietsanphamRoute.route('/delete/:MaSanPham').delete((req, res, next)=>{
      Chitietsanpham.findByIdAndRemove(req.params.MaSanPham,(error, data)=>{
        //chitietdonhangRouter.route('/delete/:MaSanPham')
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data
          })
        }
      })
    })
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = sanphamRoute;