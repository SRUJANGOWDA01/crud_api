const express = require('express')

//settings to access .env variables
require('dotenv').config()

const PORT = process.env.PORT

// instance of express
const app = express()

// app.get(route,controller)
// index route - get request method
app.get('/', function(req,res) {
    res.status(200).json({ status: true, msg: "welcome to CRUD API"})
})

//connecting router => app.use(path,router)
app.use(`/api/user`,require('./route/userRoute'))

// default route
app.all('*', (req,res)=> {
    res.status(404).json({ status: true, msg: `requested path not found`})
})

// server listen
app.listen(PORT,() => {
    console.log(`server is running @ http://localhost:${PORT}`)
})
