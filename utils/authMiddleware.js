const authMiddleware = (req, res, next) => {
     if (!req.session.loggedIn) {
      // if user is not logged in, redirect to login
       res.redirect('/');
     } else {
      // continue
       next();
     }
   };
   
module.exports = authMiddleware;
