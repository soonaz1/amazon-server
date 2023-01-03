// Package Imports
const express = require('express'); 
const mongoose = require('mongoose');
const adminRouter = require('./routes/admin');

//File Imports
const authRouter= require('./routes/auth');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

//Initializations
const PORT = 3000; // port 
const app = express();
const DB = 'mongodb+srv://soonaz:2580@cluster0.zk1pzsx.mongodb.net/?retryWrites=true&w=majority';
 
// middleware 
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// Connections 
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT,"0.0.0.0", ()=>{
console.log(`Connected at ${PORT}`);});