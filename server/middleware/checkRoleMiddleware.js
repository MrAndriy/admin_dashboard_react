const jwt = require('jsonwebtoken');
const config = require('config');
const ApiError = require('../error/ApiError');

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      next();
    }
    try {
      //get cookie
      const token = req.cookies.refreshToken;
      if (!token) {
        return next(ApiError.Unauthorized());
      }
      const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      if (decoded.role !== role) {
        return next(ApiError.forbidden());
      }
      req.user = decoded;
      next();
    } catch (e) {
      return next(ApiError.Unauthorized());
    }
  };
};
