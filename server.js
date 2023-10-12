const express = require("express");
const mongoose = require("mongoose");
const itemsRoute = require("./Routes/items");
const app = express();
const port = 3000;

//conect to mongoDB
mongoose.connect("mongodb://localhost:27017/expressJs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(itemsRoute);

//define the router and handlers for CRUD operations
app.get("/", (req, res) => {
  res.end("Server running ");
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
