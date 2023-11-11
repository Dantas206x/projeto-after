const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  console.log("Received Token:", token);

  if (!token) {
    console.log("Access denied. Not authorized...");
    return res.status(401).send("Access denied. Not authorized...");
  }

  try {
    const jwtSecretKey = process.env.TODO_APP_JWT_SECRET_KEY;
    const decoded = jwt.verify(token, jwtSecretKey);
    console.log("Decoded Token:", decoded);
    
    req.user = decoded;
    next();
  } catch (ex) {
    console.log("Invalid auth token:", ex);
    res.status(400).send("Invalid auth token...");
  }
}

module.exports = auth;