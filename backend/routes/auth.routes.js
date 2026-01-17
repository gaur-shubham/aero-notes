const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = '9fJ8LrQ2WkP6B7sE4dMZC0hN5YVt1xKqFUAaOeR3mI_ScGHyjwbD';

//ROUTE 1: create a User using: POST "/api/auth/createuser". Doesn't require authorisation/Login
router.post('/createuser', [
  //put data validation using express validator
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
  // If there are errors, return bad request and the errors.(express validator)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    //Check whether the user with this email already exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      console.log(user);
      return res.status(400).json({ error: 'Sorry, a user with this Email already exists' })
    }
    user = new User(req.body); // use 'new' keyword

    //encrypting password using bcrypt.js and adding salt to make it more secure.
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);

    const savedUser = await user.save(); // save asynchronously

    //sending JWT AUTH token in response.
    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    // res.json(savedUser); // send back saved document
    res.json({ authtoken });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//ROUTE 2: Authentice a User using: POST "/api/auth/login". No Login required
router.post('/login', [
  body('email', 'Enter a Valid Email').isEmail(),
  body('password', 'Password cannot be blank').exists()
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Please login with correct credentials." });
      }

      const passwordCompare = await bcrypt.compare(password, user.password); // takes password and comapre with all possible hash value. return true or false.
      if (!passwordCompare) {
        return res.status(400).json({ error: "Please login with correct credentials." });
      }

      //sending JWT AUTH token in response.
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });

    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  })

//ROUTE 3: Get loggein user details using: POST "/api/auth/getuser". Login required
//middleware is a function which is called everytime login reuqired routes are hit. in this call "fetchuser" is a middleware we are using and also it can be used while scaling the app.
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.log(error.message);
    res.status(401).send('Internal Server Error');
  }
})
module.exports = router