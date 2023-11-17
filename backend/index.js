const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const register = require("./routes/register");
const login = require("./routes/login");


const Rating = require("./models/Rating");
const User = require("./models/user");
const Product = require ("./models/Product")

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/register", register);
app.use("/api/login", login);

app.get("/", (req, res) => {
  console.log("Received GET request at /");
  res.send("Welcome to our online shop API...");
});

app.get("/products", async (req, res) => {
  try {
    console.log("Received GET request at /products");

    // Encontre todos os produtos no banco de dados MongoDB
    const products = await Product.find();

    // Responda com a lista de produtos
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/api/addProduct", async (req, res) => {
  try {
    console.log("Received POST request at /api/addProduct");
    // Extrair dados do corpo da solicitação
    const { id, name, desc, price, cdesc, disc, image, images, autor } = req.body;

    // Crie um novo objeto de produto usando o schema
    const newProduct = new Product({
      id,
      name,
      desc,
      price,
      disc,
      autor,
      cdesc,
      image,
      images,
    });

    // Salve o novo produto no banco de dados MongoDB
    await newProduct.save();

    console.log("Product added successfully");

    // Responda com uma mensagem de sucesso
    res.json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.post("/api/saveRating", async (req, res) => {
  try {
    console.log("Received POST request at /api/saveRating");
    // Extract data from the request body
    const { productId, userId, rating } = req.body;

    console.log("Received data:", { productId, userId, rating });

    // Save the rating to the database
    const newRating = new Rating({
      productId,
      userId,
      rating,
    });

    await newRating.save();

    console.log("Rating saved successfully");

    // Respond with a success message
    res.json({ message: "Rating saved successfully" });
  } catch (error) {
    console.error("Error saving rating to the database:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/api/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Lógica para obter os dados do usuário a partir do userId
    const userData = await User.findOne({ _id: userId }); // Substitua 'User' pelo seu modelo de usuário

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
});
app.get("/api/getAverageRating/:productId", async (req, res) => {
  try {
    const { productId } = req.params;

    // Lógica para calcular e retornar a média de avaliações para o productId
    const averageRating = await calculateAverageRating(productId);

    res.json({ averageRating });
  } catch (error) {
    console.error("Error fetching average rating:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.get("/api/getRatings/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;

    // Lógica para obter avaliações do banco de dados
    const ratings = await Rating.find({ productId });
    const totalRatings = ratings.length;

    if (totalRatings === 0) {
      return res.json({ averageRating: 0, totalRatings: 0 });
    }

    const sumRatings = ratings.reduce((total, rating) => total + rating.rating, 0);
    const averageRating = sumRatings / totalRatings;

    res.json({ averageRating, totalRatings });
  } catch (error) {
    console.error("Error fetching ratings:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Lógica para calcular a avaliação média no banco de dados
async function calculateAverageRating(productId) {
  // Adapte isso à sua lógica real para calcular a avaliação média no banco de dados
  const ratings = await Rating.find({ productId });
  const totalRatings = ratings.length;

  if (totalRatings === 0) {
    return 0;
  }

  const sumRatings = ratings.reduce((total, rating) => total + rating.rating, 0);
  return sumRatings / totalRatings;
}
app.get("/api/user/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // Lógica para obter os dados do usuário a partir do userId
    const userData = await User.findOne({ _id: userId }); // Substitua 'User' pelo seu modelo de usuário

    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error", message: error.message });
  }
});

app.get("/api/checkUserRating/:productId/:userId", async (req, res) => {
  try {
    const { productId, userId } = req.params;

    // Assuming you have a model for ratings in your MongoDB schema
    const existingRating = await Rating.findOne({ productId, userId });

    if (existingRating) {
      res.json({ hasRated: true, rating: existingRating.rating });
    } else {
      res.json({ hasRated: false });
    }
  } catch (error) {
    console.error("Error checking user rating:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


const uri = process.env.DB_URI;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conexão com o MongoDB estabelecida');

  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });