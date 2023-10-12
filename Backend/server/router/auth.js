const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
// const authenticate = require("../middlewear/authenticate");
require("../db/conn")
const User = require("../schema/users")
const Lostitemdata = require("../schema/lostItemData")
router.get('/', (req, res ) => {res.send('hello this is hari from server')} )

router.post('/register', async (req, res ) => {
const {name,regno,phone,email,password,conpassword} = req.body
if(!name || !regno || !phone || !email || !password || !conpassword){
return res.status(422).json({error:"please fill all the details"})
}
try{
const userExists = await User.findOne({email:email})
const idExists = await User.findOne({regno:regno})
if(userExists || idExists){
return res.status(422).json({error:"User already exists"})
}
else if(password!=conpassword){
return res.status(422).json({error:"doesnt match with password!..."})
}
else{
const user = new User({name,regno,phone,email,password,conpassword})
await user.save()
res.status(201).json({message : "Successfully registered"})
}


} catch(err){
console.log(err);
}
} )
//login route
router.post("/signin", async (req, res) => {
try {
const {email, password} = req.body;
if (!email || !password) {
return res.status(400).json({error: "Invalid crendentials"})
}
const userLogin = await User.findOne({email:email})
if (userLogin) {
const isMatch = await bcrypt.compare(password, userLogin.password);
// const token = await userLogin.generateAuthToken();
// console.log(token)
// res.cookie("jwtoken",token,{
// expires:new Date(Date.now()+1800),
// httpOnly:true
// })
if(!isMatch){
return res.status(400).json({error: "Invalid crendentials"})
}
else{
res.json({message: "login successful"})
}
}else {
return res.status(400).json({error: "Invalid crendentials"})
}
} catch (err) {
console.log(err);
}
})
router.get('/getdata', async(req, res) => {
res.send(req.rootUser)
});

// get all users method
router.get('/getallusers', async (req, res) => {
try {
const users = await User.find();
res.json(users);
} catch (err) {
console.log(err);
res.status(500).json({ error: 'Internal server error' });
}
});

// to get all lost items
router.get('/getLostItems', async (req, res) => {
try {
const lostItems = await Lostitemdata.find();
res.json(lostItems);
} catch (err) {
console.log(err);
res.status(500).json({ error: 'Internal server error' });
}
});

// put method to update password


// ...existing code...

router.put('/forgotpassword', async (req, res) => {
try {
const { email, newPassword, newConPassword } = req.body;

if (!email || !newPassword || !newConPassword) {
return res.status(400).json({ error: "Please fill in all the required fields" });
}

if (newPassword !== newConPassword) {
return res.status(400).json({ error: "New password and confirm password do not match" });
}

const user = await User.findOne({ email: email });

if (!user) {
return res.status(404).json({ error: "User not found" });
}

const hashedPassword = await bcrypt.hash(newPassword, 12);
user.password = hashedPassword;

await user.save();

res.status(200).json({ message: "Password updated successfully" });
} catch (err) {
console.log(err);
res.status(500).json({ error: "Internal server error" });
}
});




// router.post('/submitItem', async(req, res) => {
// try{
// const {date,itemName,location,description} = req.body
// if(!date || !itemName || !location || !description ){
// return res.json({error:"Please fill all details"})
// }
// const person = await User.findOne({_id:req.userID})
// if(person){
// const submitData = await person.addMessage(date,itemName,location,description);
// await person.save();
// res.status(201).json({message:"Item submitted successfully"})
// }

// }catch(err){
// console.log(err);
// }
// });

// for lost item data submitions
router.post('/submitItem', async (req, res ) => {
const {name,phone,email,date, itemName, location, description} = req.body
if(!name || !phone || !email || !date || !itemName || !location || !description){
return res.status(422).json({error:"please fill all the details"})
}
try{

const lostItem = new Lostitemdata({name,phone,email,date, itemName, location, description})
// await lostItem.save()
lostItem.save();
res.status(201).json({message : "Successfully submitted item"})



} catch(err){
console.log(err);
}
} )

// delete method to delete lost item
router.delete('/lostitem/:id', async (req, res) => {
try {
const itemId = req.params.id;

// Check if the item exists
const lostItem = await Lostitemdata.findById(itemId);
if (!lostItem) {
return res.status(404).json({ error: "Lost item not found" });
}

// Delete the item
await lostItem.remove();

res.status(200).json({ message: "Lost item deleted successfully" });
} catch (err) {
console.log(err);
res.status(500).json({ error: "Internal server error" });
}
});


module.exports = router;