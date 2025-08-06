const Item = require("../models/Item");

//Add new item
exports.addItem = async (req, res) => {
  const {
    name,
    barcodeNumber,
    image,
    rating,
    totalRatings,
    cumulativeRating,
    price,
    tags,
    topPick,
    bottomPick,
  } = req.body;

  try {
    if ((!name, !barcodeNumber, !image, !price)) {
      return res.status(400).json({ message: "These fields are required" });
    }

    const newItem = new Item({
      name,
      barcodeNumber,
      image,
      rating,
      totalRatings,
      cumulativeRating,
      price,
      tags,
      topPick,
      bottomPick,
    });
    await newItem.save();
    res.status(200).json(newItem)

  } catch (error) {
    res.status(500).json({ message: error.message  });
  }
};


//Get all Method
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get by ID Method
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update by ID Method
exports.updateItemById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Item.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
    res.json({ message: "Item updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// //Delete by ID Method
exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Income deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};