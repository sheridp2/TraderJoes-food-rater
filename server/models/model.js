const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    barcodeNumber: {
        required: true,
        type: String
    },
    image: {
      required: true,
      type: String
    },
    rating: {
      required: true,
      type: Number
    },
    totalRatings: {
      required: true,
      type: Number
    },
    cumulativeRating: {
      required: true,
      type: Number
    },
    price:{
      required: true,
      type: Number
    },
    tags: {
      type: [String]
    }

})

module.exports = mongoose.model('Data', productSchema)