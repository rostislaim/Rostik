const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express(); // Створення нового екземпляру Express

app.use(cors()); // CORS-запитів
app.use(bodyParser.json()); // JSON-даних у запитах

// Підключення до MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected")) 
  .catch(err => console.error("MongoDB connection error:", err)); 

// Визначення схеми та моделі користувача
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model("User", userSchema); // Створення моделі користувача на основі схеми

// Маршрут для обробки реєстрації
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body; // Отримання ім'я користувача та пароль з тіла запиту
    const newUser = new User({ username, password }); 
    await newUser.save(); 
    res.status(201).json({ message: "User registered successfully" }); 
  } catch (err) {
    console.error(err); 
    res.status(500).json({ error: "Internal Server Error" })
    }
});

// Запуск сервера
app.listen(3000, () => {
  console.log("Server is running on port 3000"); 
});
