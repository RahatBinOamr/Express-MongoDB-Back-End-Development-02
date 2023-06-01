const Book = require("./bookModel");

exports.createBook = async (data) => {
  const book = await Book.create(data);
  return book;
};
exports.getBooks = async () => {
  const books = await Book.find({});
  return books;
};
exports.getSingleBook = async (id) => {
  const books = await Book.findOne(id);
  return books;
};

exports.updateBook = async (data, id) => {
  const book = await Book.updateOne({ _id: id }, { $set: data });
  return book;
};
exports.deleteBook = async (id) => {
  const book = await Book.deleteOne({ _id: id });
  return book;
};
