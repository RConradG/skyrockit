// controllers/applications.js

const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// we will build out our router logic here

// GET /users/:userId/applications <- already here when the bottom router gets called
router.get("/", async (req, res) => {
  try {
    res.render("applications/index.ejs");
  } catch(error) {
      console.log(error);
      res.redirect("/");
  };
});

module.exports = router;
