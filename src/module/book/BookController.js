const {
  createBook,
  updateBook,
  deleteBook,
  getBooks,
  getSingleBook,
} = require("./bookService");

exports.createdBookToDb = async (req, res) => {
  try {
    const book = await createBook(req.body);
    res.status(200).json({
      status: "success",
      message: "books data create successfully",
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getBooksToDb = async (req, res) => {
  try {
    const books = await getBooks();
    res.status(200).json({
      status: books?.length > 0 ? "success" : "false",
      message:
        books?.length > 0
          ? "Books data get successfully"
          : "books data not found!!!",
      data: books?.length >= 0 ? books : [],
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
exports.getSingleBookToDb = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await getSingleBook({ _id: id });
    res.status(200).json({
      status: "success",
      message: book?._id
        ? "book data get successfully"
        : "book data not found!! may be deleted",
      data: book?._id ? book : "book data not found",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateBookToDb = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await updateBook(req.body, id);
    res.status(200).json({
      status: "success",
      message: "Book update successfully",
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.deleteBookToDb = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await deleteBook(id);
    res.status(200).json({
      status: "success",
      message: "Book Delete successfully",
      data: book,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
