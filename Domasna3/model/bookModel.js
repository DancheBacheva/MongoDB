const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "This field is required"],
  },
  author: {
    type: String,
    required: [true, "This field is required"],
  },
  year: {
    type: Number,
    required: [true, "This field is required"],
  },
  rating: {
    type: Number,
    required: [true, "This field is required"],
  },
  genre: {
    type: String,
    required: [true, "This field is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;