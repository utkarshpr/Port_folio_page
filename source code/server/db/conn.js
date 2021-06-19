const mongoose = require('mongoose');
//const DB = process.env.DATABASE;
const DB =
  'your db link';
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected');
  })
  .catch((e) => {
    console.log(e);
  });
