const express = require('express');
const app = express();
const donhangRoute = express.Router();

// Donhang model
let Donhang = require('../models/Donhang');

// Add Donhang
donhangRoute.route('/create').post((req, res, next) => {
  Donhang.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Donhangs
donhangRoute.route('/').get((req, res) => {
  Donhang.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single donhang
donhangRoute.route('/read/:MaDonHang').get((req, res) => {
  Donhang.findById(req.params.MaDonHang, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update donhang
donhangRoute.route('/update/:MaDonHang').put((req, res, next) => {
  Donhang.findByIdAndUpdate(req.params.MaDonHang, {
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

// Delete donhang
donhangRoute.route('/delete/:MaDonHang').delete((req, res, next) => {
  Donhang.findOneAndRemove(req.params.MaDonHang, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = donhangRoute;