const express = require("express");
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin")

const router = express.Router();

const Post = mongoose.model("Post");

router.post("/createpost",requireLogin, (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    res.status(422).json({ error: "Please add all the fields!" });
  }
  console.log(req.user);
  res.send("ok");
  // const post = new post({
  //     title,
  //     body,
  //     posted
  // })
});

module.exports = router;
