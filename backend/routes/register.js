const bcrypt = require("bcrypt");
const { User } = require("../models/user");
const Joi = require("joi");
const express = require("express");
const genAuthToken = require("../utils/genAuthToken");
const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
    cep: Joi.string().min(6).max(200).required(),
    address: Joi.string().min(6).max(200).required(),
    city: Joi.string().min(6).max(200).required(),
    neighborhood: Joi.string().min(6).max(200).required(),
    region: Joi.string().min(2).max(2).required(),
    number: Joi.string().min(1).max(200).required(),
    complement: Joi.string().min(6).max(200).required(),
    isAdmin: Joi.boolean().default(false), 
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists...");

  console.log("here");

  const {
    name,
    email,
    password,
    cep,
    address,
    city,
    neighborhood,
    region,
    number,
    complement,
    isAdmin,
  } = req.body;

  user = new User({
    name,
    email,
    password,
    cep,
    address,
    city,
    neighborhood,
    region,
    number,
    complement,
    isAdmin, 
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();

  const token = genAuthToken(user);

  res.send(token);
});

module.exports = router;