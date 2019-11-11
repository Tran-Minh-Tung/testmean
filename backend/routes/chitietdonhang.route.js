const express = require('express');
const app = express();
const chitietdonhangRoute = express.Router();

// Chitietdonhang model
let Chitietdonhang = require('../models/Chitietdonhang');

// Add Chitietdonhang
chitietdonhangRoute.route('/create').post((req, res, next) => {
  Chitietdonhang.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Chitietdonhangs
chitietdonhangRoute.route('/').get((req, res) => {
  Chitietdonhang.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single chitietdonhang
chitietdonhangRoute.route('/read/:MaChiTietDonHang').get((req, res) => {
  Chitietdonhang.findById(req.params.MaChiTietDonHang, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update chitietdonhang
chitietdonhangRoute.route('/update/:MaChiTietDonHang').put((req, res, next) => {
  Chitietdonhang.findByIdAndUpdate(req.params.MaChiTietDonHang, {
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

// Delete chitietdonhang
chitietdonhangRoute.route('/delete/:MaChiTietDonHang').delete((req, res, next) => {
  Chitietdonhang.findOneAndRemove(req.params.MaChiTietDonHang, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = chitietdonhangRoute;