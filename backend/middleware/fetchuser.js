var jwt = require('jsonwebtoken');
const JWT_SECRET = '9fJ8LrQ2WkP6B7sE4dMZC0hN5YVt1xKqFUAaOeR3mI_ScGHyjwbD';

//we are using this middleware to add user Id in the req so we can use the UserId for getUser everytime to authenticate.
const fetchuser = (req, res, next) => {
    //get the user  from the JWT token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token." })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;

        // it'll call the nxt function in the call from whereever this middleware is called.
        next()
    } catch (error) {
        res.status(401).send({ error: "please authenticate using a valid token." })
    }

}

module.exports = fetchuser;