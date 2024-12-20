const jwt = require('jsonwebtoken');

module.exports = {
  authenticate(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

    try {
      const decoded = jwt.verify(token, 'SECRET_KEY'); // Remplace 'SECRET_KEY' par une vraie clé secrète
      req.user = decoded;
      next();
    } catch (err) {
      res.status(400).json({ error: 'Invalid token' });
    }
  },

  authorize(roles = []) {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: 'Forbidden: You do not have access to this resource' });
      }
      next();
    };
  },
};
