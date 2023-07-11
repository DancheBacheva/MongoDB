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