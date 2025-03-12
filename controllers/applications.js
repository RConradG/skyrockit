// controllers/applications.js

const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

// we will build out our router logic here

// GET /users/:userId/applications <- already here when the bottom router gets called

router.get("/", async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    res.render("applications/index.ejs", {
      applications: currentUser.applications
    });
    // pass the current user's applications to the index page
  } catch(error) {
    console.log(error);
    res.redirect("/");
  };
});

router.get("/new", async (req, res) => {
  res.render("applications/new.ejs");
});

// POST /users/:userId/applications
router.post("/", async(req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    currentUser.applications.push(req.body); // this changes the application list in memory only
    await currentUser.save(); // this makes the changes permanent in db
    res.redirect(`/users/${currentUser._id}/applications`);

  } catch (error) {
    console.log("error");
    
  }
});

module.exports = router;
