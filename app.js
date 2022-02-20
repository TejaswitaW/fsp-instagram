const express = require("express");
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");

const app = express();
const PORT = 5000;

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("Connection to MongoDB is successful");
});
mongoose.connection.on("error", (err) => {
  console.log("Error came while connecting to MongoDB", err);
});

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
