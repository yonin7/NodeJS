const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/mongoose', {
  // useNewUrlParser: true,
  // useCreateIndex: true,
});

const Shop = mongoose.model('shop', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minLength: 10,
    },
    Price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error('must be positive');
        }
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    imgs: {
      type: Array,
      minItems: 2,
    },
  },
});

const item = new Shop({
  name: 'Jeyk',
  isActive: true,
  details: {
    description: 'hello my name is yoni',
    Price: 10,
    discount: 5,
  },
});

item
  .save()
  .then((item) => {
    console.log(item);
  })
  .catch((err) => {
    console.log(err);
  });
