const mongoose = require('mongoose');
const validator = require('validator');

const Product = mongoose.model('Product', {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  isActive: {
    type: Boolean,
  },
  details: {
    description: {
      type: String,
      required: true,
      minLength: 10,
      validate(value) {
        if (value < 10) {
          throw new Error('min 10 characters');
        }
      },
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
    // imgs: {
    //   type: Array,
    //   minItems: 2,
    //   validate(value) {
    //     if (value < 2) {
    //       throw new Error('err!!!!');
    //     }
    //   },
    // },
  },
});

module.exports = Product;
