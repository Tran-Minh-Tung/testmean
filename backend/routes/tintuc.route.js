const express = require('express');
const app = express();
const tintucRoute = express.Router();

// Tintuc model
let Tintuc = require('../models/Tintuc');

// Add Tintuc
tintucRoute.route('/create').post((req, res, next) => {
  Tintuc.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Tintucs
tintucRoute.route('/').get((req, res) => {
  Tintuc.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single tintuc
tintucRoute.route('/read/:MaTinTuc').get((req, res) => {
  Tintuc.findById(req.params.MaTinTuc, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update tintuc
tintucRoute.route('/update/:MaTinTuc').put((req, res, next) => {
  Tintuc.findByIdAndUpdate(req.params.MaTinTuc, {
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

// Delete tintuc
tintucRoute.route('/delete/:MaTinTuc').delete((req, res, next) => {
  Tintuc.findOneAndRemove(req.params.MaTinTuc, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = tintucRoute;