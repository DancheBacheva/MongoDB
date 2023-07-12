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
    const queryObj = {...req.query};
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    const query = JSON.parse(queryString);
    const books = await Book.find(query);
    res.send(books);
  }catch(err){
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getBook = async (req, res) => {
  try{
    const book = await Book.findById(req.params.id);
    res.send(book);
  }catch(err){
    res.status(200).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateBook = async (req, res) => {
  try{
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body,
    {
      new: true,
      runValidators: true,
    });
    res.send(updatedBook);
  }catch(err){
    res.status(200).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteBook = async (req, res) => {
  try{
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  }catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};