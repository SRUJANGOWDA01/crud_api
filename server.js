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

// read all users => get request method
app.get(`/api/users`, function(req,res){
    res.status(201).json({ status: true, msg: "all users"})
})

// create new user => post request
app.post(`/api/user/create`, function (req,res){
    res.status(201).json({ status: true, msg: "create new user"})
})

// update existing user => patch request
app.patch(`/api/user/:id`, function(req,res) {
    res.status(201).json({ status: true, msg: "update existing user"})
})

// delete existing user => delete request
app.delete(`/api/user/:id`, function(req,res) {
    res.status(201).json({ status: true, msg: "delete existing user"})
})

// default route
app.all('*', (req,res)=> {
    res.status(404).json({ status: true, msg: `requested path not found`})
})

// server listen
app.listen(PORT,() => {
    console.log(`server is running @ http://localhost:${PORT}`)
})
