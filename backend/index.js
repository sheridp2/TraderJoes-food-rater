require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const itemRoutes = require("./routes/itemRoutes")

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methhods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json())

connectDB();

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/item", itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))