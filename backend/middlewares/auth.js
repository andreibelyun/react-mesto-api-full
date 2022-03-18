const jwt = require('jsonwebtoken');
const { UnauthorizatedError } = require('../errors');

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
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    next(new UnauthorizatedError('Необходима авторизация'));
    return;
  }

  req.user = payload;
  next();
};
