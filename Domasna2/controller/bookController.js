const Book = require("../model/bookModel");

exports.createBook = async (req, res) => {
  try{
    const newBook = await Book.create(req.body);
    res.send(newBook);
  }catch(err){
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllBooks = async (req, res) => {
  try{
    const books = await Book.find();
    res.status(200).json({
      test: "Test",
      status: "Success",
      data: {
        books: books,
      },
    });

  }catch(err){
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};