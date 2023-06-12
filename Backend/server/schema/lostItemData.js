const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const losttItemData = new mongoose.Schema({
name : {
type:String,
required : true
},

phone :{
type :Number,
required :true
},
email : {
type :String,
required :true
},

date:{
type:String,
required : true
},
itemName:{
type:String,
required:true
},
location:{
type:String,
required:true
},
description:{
type:String,
required:true
}

// tokens :[{
// token:{
// type : String,
// required : true
// }
// }]
})

// hashing the password

// losttItemData.pre('save', async function(next) {
// if (this.isModified('password')) {
// const hashedPassword = await bcrypt.hash(this.password, 12);
// const hashedConpassword = await bcrypt.hash(this.conpassword, 12);
// this.password = hashedPassword;
// this.conpassword = hashedConpassword;
// }
// next();
// });
// users.methods.generateAuthToken = async function () {
// try{
// let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
// this.tokens = this.tokens.concat({token:token})
// await this.save();
// return token
// }catch (err){
// console.log(err)
// }
// }
// users.methods.addMessage = async function (date,itemName,location,description){
// try{
// this.submitItemData = this.submitItemData.concat({date,itemName,location,description})
// await this.save();
// return this.submitItemData
// }catch(err){
// console.log(err);
// }
// }
const Lostitemdata = mongoose.model('LOSTITEMDATA', losttItemData)
module.exports = Lostitemdata;