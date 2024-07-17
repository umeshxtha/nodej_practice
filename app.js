// const express = require('express')
// const mongoose = require('mongoose');
// const app = express()

// mongoose.connect("mongodb+srv://umeshxtha123:Umesh12345@cluster0.iwyvwg4.mongodb.net/project1?retryWrites=true").then(() =>{
//     console.log("database connected succesfully");
// }).catch(err =>{
//     console.log(err)
// })

// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: [true,"A name is a required field"],

//     },
//     email: {
//         type: String,
//         required: [true,"An Email is a required field"],
//         unique: [true, "An email should be unique"],
//     },
//     phoneNo: {
//         type: String,
//         // unique: [true, "An phoneNo should be unique"],
//     },
//     address: {
//         type: String,
//     },
//     gender: {
//         type: [String],
//         enum: ["Male","Female"],
//         required: [true,"Gender is either Male or Female"],
//     },
//     religion: {
//         type: String,
//     }
// })

// const User = mongoose.model("User",userSchema)

// const newUser = new User({
//     name: "Milan",
//     email:"milanrokaya20@gmail.com",
//     gender: "Male"
// })

// newUser.save();

// app.get('/', function (req, res) {
//   res.status(200).json({
//     status: 'success',
//     data: {
//         newUser
//     },
//     message: "ok"
//   })
// })

// // app.listen(3000,() =>{
// //     console.log("server running at 3000...")
// // })

// // setInterval(()=>{
// //     console.log("Hello World ");
// })

// modules

const names = require("./4-modules");
const SayHi = require("./5-utils");
require('./7-mind-generate')

// SayHi(names.BharatThapa);
// SayHi(names.BipinRegmi);
// SayHi("Umesh Kumar Shrestha")
