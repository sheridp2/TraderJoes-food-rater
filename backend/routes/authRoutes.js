const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  getUserInfo,
  addUserItemRating
} = require("../controllers/authControllers");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/getUser", protect, getUserInfo);

router.patch("/addUserItemRating", protect, addUserItemRating)

module.exports = router;
