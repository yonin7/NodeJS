const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://127.0.0.1:27017/mongoose', {
  // useNewUrlParser: true,
  // useCreateIndex: true,
});

// const me = new User({
//   name: 'Jeyk',
//   email: 'HSDA@mead.io  ',
//   password: 'dsa45sa',
// });

// me.save()
//   .then((me) => {
//     console.log(me);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
