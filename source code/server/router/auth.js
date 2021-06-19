const { json } = require('express');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
require('../db/conn');
const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const autho=require("../middleware/autho");
router.get('/', (req, res) => {
  res.send('hello from router');
});

router.get('/aboutme',autho, (req, res) => {
  res.send('req.rootUser');
});
router.get('/contact', (req, res) => {
  
  res.send('Contact');
});


// router.post('/signup', (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;
//   // console.log(name,password,phone,cpassword,work,email);
//   if (!name || !password || !phone || !cpassword || !work || !email) {
//     return res.status(422).json({ error: 'All field not completed' });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//           console.log(userExist)
//         return res.status(422).json({ error: 'User already existed' });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: 'Register sucessfull' });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: 'Failed to register' });
//         });
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// });

router.post('/signup', async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !password || !phone || !cpassword || !work || !email) {
    return res.status(422).json({ error: 'All field not completed' });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: 'User already existed' });
    }

    const user = new User({ name, email, phone, work, password, cpassword });
    //password hashing done
    // +++++++++++++
    //
    const data_base = await user.save();
    if (data_base) {
      res.status(201).json({ mesaage: 'Registered Successfully' });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: 'Enter every field' });
  }
  try {
    const NewLogin = await User.findOne({ email: email });

    if (NewLogin) {
      const pass = NewLogin.password;
      const isMatch = await bcrypt.compare(password, pass);
      const token = await NewLogin.generateAuthToken();
     
      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (isMatch) {
        res.status(201).json({ mesaage: 'Login Successfully' });
      } else {
        return res.status(401).send({ error: 'Password wrong' });
      }
    } else {
      return res.status(401).send({ error: 'Not registered Yet' });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
