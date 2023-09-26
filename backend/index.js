const express = require("express");
const cors = require("cors");


const produtos = require("./produtos");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
    res.send("bem vindo ao shop")
});
app.get("/produtos", (req, res) =>{
    res.send(produtos);
});

const port = process.env.PORT || 5000

app.listen(5000, console.log('server está rodando na porta 5000'));