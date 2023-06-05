const mongoose = require('mongoose');
const express = require('express');

const app = express();
const DB = "mongodb+srv://haribabu91000:Hari91000@cluster0.arzngib.mongodb.net/lostandfoundmain?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    console.log(`connection successful`);
}).catch((err)=>
console.log(err)
);
app.get('/', (req, res) => {
    res.send('hello hari i am from server ')
})
app.get('/login', (req, res) => {
    res.send('this is from login page ')
})

app.listen(3000, () => {
console.log("server code is runnimg")
})

