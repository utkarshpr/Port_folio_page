const mongoose = require('mongoose');
//const DB = process.env.DATABASE;
const DB =
  'mongodb+srv://utkarsh:uttu5563@cluster0.smtao.mongodb.net/mernyoutube?retryWrites=true&w=majority';
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
