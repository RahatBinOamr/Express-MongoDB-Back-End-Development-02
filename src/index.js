const mongoose = require("mongoose");
const app = require("./app");
const port = 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/book");
    console.log("database connection successful");
  } catch (err) {
    console.log(err.message);
  }
}
main();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
