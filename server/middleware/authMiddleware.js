const jwt = require('jsonwebtoken');
const config = require('config');
const ApiError = require('../error/ApiError');

module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }
  try {
    // get token from header
    const token = req.cookies.token;
    if (!token) {
      return next(ApiError.Unauthorized());
    }
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    const { id } = req.params;
    req.user = decoded;
    if (id === req.user.id || req.user.role === 'ADMIN') {
      next();
    } else {
      return next(ApiError.forbidden());
    }
  } catch (e) {
    return next(ApiError.Unauthorized());
  }
};
