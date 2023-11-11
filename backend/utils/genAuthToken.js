
const jwt = require("jsonwebtoken");


const genAuthToken = (user) => {

  const jwtSecretKey = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      cep: user.cep,
      address: user.address,
      city: user.city,
      neighborhood: user.neighborhood,
      region: user.region,
      number: user.number,
      complement: user.complement,
    },
    jwtSecretKey
  );




  return token;
};

module.exports = genAuthToken;