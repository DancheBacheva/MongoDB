const express = require("express");
const mongoose = require("mongoose");

const bookController = require("./controller/bookController")

const app = express();

app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://danchebacheva:5B1keENwdr50XhWm@cluster0.hpujfqj.mongodb.net/db_books?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("Successful connection!");
}).catch((err)=>{
  console.log(err);
})

app.post("/books", bookController.createBook);
app.get("/books", bookController.getAllBooks);

app.listen(10000, (err)=>{
  console.log("The application is running")
});