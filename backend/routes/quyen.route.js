const express = require('express');
const app = express();
const quyenRoute = express.Router();

// Quyen model
let Quyen = require('../models/Quyen');

// Add Quyen
quyenRoute.route('/create').post((req, res, next) => {
  Quyen.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Quyens
quyenRoute.route('/').get((req, res) => {
  Quyen.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single quyen
quyenRoute.route('/read/:IDQuyen').get((req, res) => {
  Quyen.findById(req.params.IDQuyen, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update quyen
quyenRoute.route('/update/:IDQuyen').put((req, res, next) => {
  Quyen.findByIdAndUpdate(req.params.IDQuyen, {
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

// Delete quyen
quyenRoute.route('/delete/:IDQuyen').delete((req, res, next) => {
  Quyen.findOneAndRemove(req.params.IDQuyen, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = quyenRoute;