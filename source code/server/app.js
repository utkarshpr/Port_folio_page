const express = require('express');
const donenv = require('dotenv');
const app = express();
const Port = process.env.PORT || 8000;
const mongoose = require('mongoose');
require('./db/conn');
app.use(express.json());
const User = require('./model/userSchema');
donenv.config({ path: './config.env' });
const DB = process.env.DATABASE;
//==========================================
//
//
//
//link the router file================================
app.use(require('./router/auth'));
//=========================================
//
//
app.listen(Port, () => {
  console.log(`Listining in port ${Port}`);
});
