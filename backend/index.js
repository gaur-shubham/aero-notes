const connectToMongo = require('./db');
const express = require('express')

connectToMongo();


const app = express()
const port = 5000

app.use(express.json())

//Available routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/auth', require('./routes/auth.routes'))   //auth.routes.js file in routes folder
app.use('/api/notes', require('./routes/notes.routes')) //notes.routes.js file in routes folder

app.listen(port, () => {
    console.log(`Aero-Notes backend listening on port http://localhost:${port}`)
})
