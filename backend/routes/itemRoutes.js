const express = require("express");
const {
  addItem,
  getAllItems,
  getItemById,
  updateItemById,
  deleteItem,
} = require("../controllers/itemController");

const router = express.Router();

router.post("/add", addItem);

router.get("/getAll", getAllItems);

router.get("/get/:id", getItemById)

router.patch("/update/:id", updateItemById);

router.delete("/:id", deleteItem);

module.exports = router;
