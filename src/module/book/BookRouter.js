const express = require("express");
const {
  getBooksToDb,
  createdBookToDb,
  updateBookToDb,
  deleteBookToDb,
  getSingleBookToDb,
} = require("./BookController");
const router = express.Router();

router.route("/").get(getBooksToDb).post(createdBookToDb);
router
  .route("/:id")
  .get(getSingleBookToDb)
  .put(updateBookToDb)
  .delete(deleteBookToDb);
module.exports = router;
