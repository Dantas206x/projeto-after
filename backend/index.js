const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const products = require("./products");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("bem vindo");
});

app.get("/products", (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;
const uri = process.env.DB_URI

app.listen(port, console.log(`Server running on port ${port}`));


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDb conexão aceita."))
  .catch((err) => console.log ("MongoDb falhou na conexão", err.message));