const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');
const SECRETKEY = 'MYNAMEISUTKARSHPRAVINDMERNYOUTUBE';

const autho = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;

    const verifiedtoken = jwt.verify(token, SECRETKEY);

    const rootUser = await User.findOne({
      _id: verifiedtoken._id,
      'tokens.token': token,
    });

    if (!rootuser) {
      throw new Error('User Not Found');
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).send('Unauthorised token .....');
  }
};
module.exports = autho;
