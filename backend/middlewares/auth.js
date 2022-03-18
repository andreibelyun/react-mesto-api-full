require('dotenv').config(); // модуль для переменных окружения
const jwt = require('jsonwebtoken');
const { UnauthorizatedError } = require('../errors');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  // const { token } = req.cookies;
  // для кук
  // if (!token) {
  //   next(new UnauthorizatedError('Необходима авторизация'));
  //   return;
  // }

  const { authorization } = req.headers; // строка "Bearer ...."

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizatedError('Необходима авторизация'));
    return;
  }

  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(new UnauthorizatedError('Необходима авторизация'));
    return;
  }

  req.user = payload;
  next();
};
