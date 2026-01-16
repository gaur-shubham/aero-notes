const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

//create a User using: POST "/api/auth/createuser". Doesn't require authorisation/Login
router.post('/createuser', [
  //put data validation using express validator
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
  // If there are errors, return bad request and the errors.
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log(user);
      return res.status(400).json({ error: 'Sorry, a user with this Email already exists' })
    }
    user = new User(req.body); // use 'new' keyword
    const savedUser = await user.save(); // save asynchronously
    res.json(savedUser); // send back saved document
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router