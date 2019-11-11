const express = require('express');
const app = express();
const userRoute = express.Router();

// User model
let User = require('../models/User');

// Add User
userRoute.route('/create').post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Users
userRoute.route('/').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single user
userRoute.route('/read/:ID').get((req, res) => {
  User.findById(req.params.ID, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update user
userRoute.route('/update/:ID').put((req, res, next) => {
  User.findByIdAndUpdate(req.params.ID, {
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

// Delete user
userRoute.route('/delete/:ID').delete((req, res, next) => {
  User.findOneAndRemove(req.params.ID, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = userRoute;