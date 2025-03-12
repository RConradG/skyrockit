const isSignedIn = (req, res, next) => {
  if(req.session.user) return next();
  // if a user is signed in, call teh next middleware function 
  res.redirect("/auth/sign-in");
};

module.exports = isSignedIn;