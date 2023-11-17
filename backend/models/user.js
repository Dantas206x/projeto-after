const mongoose = require('mongoose');

require("dotenv").config();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
    unique: true,
  },
  password: { type: String, required: true, minlength: 3, maxlength: 1024 },
  cep: { type: String, minlength: 3, maxlength: 1024 },
  address: { type: String, minlength: 3, maxlength: 1024 },
  city: { type: String, minlength: 3, maxlength: 1024 },
  neighborhood: { type: String, minlength: 3, maxlength: 1024 },
  region: { type: String, minlength: 2, maxlength: 1024 },
  number: { type: String, minlength: 1, maxlength: 1024 },
  complement: { type: String, minlength: 3, maxlength: 1024 },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  
});

// You don't need to define the findById method explicitly; Mongoose already provides it.
const User = mongoose.model('User', userSchema);

module.exports = { User };