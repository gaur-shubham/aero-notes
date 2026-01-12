const express = require('express');
const User = require('../models/User');
const router = express.Router();

//create a User using: POST "/api/auth". Doesn't require authorisation

router.post('/', async (req, res) => {
  try {
    const user = new User(req.body); // use 'new' keyword
    const savedUser = await user.save(); // save asynchronously
    res.json(savedUser); // send back saved document
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router