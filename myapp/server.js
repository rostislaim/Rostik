const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express(); // Створення нового екземпляру Express

app.use(cors()); // Додавання middleware для обробки CORS-запитів
app.use(bodyParser.json()); // Додавання middleware для обробки JSON-даних у запитах

// Підключення до MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected")) // Вивід повідомлення про успішне підключення до MongoDB
  .catch(err => console.error("MongoDB connection error:", err)); // Вивід повідомлення про помилку підключення до MongoDB

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
    const newUser = new User({ username, password }); // Створення нового користувача з отриманими даними
    await newUser.save(); // Збереження нового користувача у базі даних
    res.status(201).json({ message: "User registered successfully" }); // Відправка відповіді про успішну реєстрацію
  } catch (err) {
    console.error(err); // Вивід помилки в консоль
    res.status(500).json({ error: "Internal Server Error" }); // Відправка відповіді про внутрішню помилку сервера
  }
});

// Запуск сервера
app.listen(3000, () => {
  console.log("Server is running on port 3000"); // Вивід повідомлення про запуск сервера на порту 3000
});
