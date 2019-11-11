const express = require('express');
const app = express();
const chitietsanphamRoute = express.Router();

// Chitietsanpham model
let Chitietsanpham = require('../models/Chitietsanpham');

// Add Chitietsanpham
chitietsanphamRoute.route('/create').post((req, res, next) => {
  Chitietsanpham.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Chitietsanphams
chitietsanphamRoute.route('/').get((req, res) => {
  Chitietsanpham.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single chitietsanpham
chitietsanphamRoute.route('/read/:MaSanPham').get((req, res) => {
  Chitietsanpham.findById(req.params.MaSanPham, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update chitietsanpham
chitietsanphamRoute.route('/update/:MaSanPham').put((req, res, next) => {
  Chitietsanpham.findByIdAndUpdate(req.params.MaSanPham, {
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

// Delete chitietsanpham
chitietsanphamRoute.route('/delete/:MaSanPham').delete((req, res, next) => {
  Chitietsanpham.findOneAndRemove(req.params.MaSanPham, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = chitietsanphamRoute;