// Middleware to check for admin role
function auth(req, res, next) {
  
  if (req.query.admin === 'true') {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(403).send("Access denied");
  }
}

module.exports = auth;