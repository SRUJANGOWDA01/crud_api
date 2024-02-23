const User = require('../model/user')

//read all users
const readAll = function(req,res){
    res.status(200).json({ status: true, msg: " read all users"})
}
//read single users
const readSingle = function(req,res){
    res.status(200).json({ status: true, msg: " read single user"})
}

//create user
const createUser = async (req,res) => {
    //reading the incoming data (urlencoded/json)
    let data = req.body

    //check for existing data
    //existing email
    let extUser = await User.findOne({email: data.email})
    if(extUser)
         return res.status(400).json({ status: false, msg: `user email ${data.email} already exists`})

    //existing mobile number
    let extMobile = await User.findOne({mobile: data.mobile})
    if(extMobile)
         return res.status(400).json({ status: false, msg: `user mobile ${data.mobilel} already registered`})

         //to create new user data
    let newUser = await User.create(data) 
     // final response
    res.status(201).json({ status: true, msg: " New user created successfuly", newUser})
}


// update user
const updateUser = function(req,res) {
    res.status(201).json({ status: true, msg: "update existing user"})
}

//delete user
const deleteUser = function(req,res) {
    res.status(201).json({ status: true, msg: "delete existing user"})
}

module.exports = {readAll,readSingle,createUser,updateUser,deleteUser}