
const userRouter = require('express').Router()
/* const express = require('express) 
  const userRoute = express.Router() */

const { readAll, readSingle, createUser, updateUser, deleteUser } = require('../controller/userController')



  //read all users => get request method /api/user/all
  userRouter.get(`/all`, readAll)

  //read single -> /api/user/single/123
  userRouter.get(`/single/:userId`, readSingle)

  //create new user => post request -> /api/user/create
  userRouter.post(`/create`,createUser)

  //update existing user => patch request -> /api/user/update/123
  userRouter.patch(`/update/:id`, updateUser)

  //delete existing user => delete request -> /api/user/delete/123
  userRouter.delete(`/delete/:id`, deleteUser)

  module.exports = userRouter