require('dotenv').config(); // модуль для переменных окружения
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { NotFoundError, ConflictError, BadRequestError } = require('../errors');
const User = require('../models/user');

const { NODE_ENV, JWT_SECRET } = process.env;

const getUsers = (req, res, next) => {
  User.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(next);
};

const getUserById = (req, res, next) => {
  const { id } = req.params;
  User.findOne({ _id: id })
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        throw new NotFoundError('Пользователь не найден');
      }
    })
    .catch(next);
};

const getUserInformation = (req, res, next) => {
  const id = req.user._id;

  User.findOne({ _id: id })
    .then((user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        throw new NotFoundError('Пользователь не найден');
      }
    })
    .catch(next);
};

const createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;
  // хеширование пароля и создание юзера
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then((user) => {
      res.status(201).send({
        name: user.name,
        about: user.about,
        avatar: user.avatar,
        email: user.email,
      });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы неккоректные данные при создании пользователя'));
      }
      if (err.code === 11000) {
        next(new ConflictError('Email занят'));
      } else next(err);
    });
};

const updateOptions = {
  new: true,
  runValidators: true,
};

const updateUser = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, updateOptions)
    .orFail(new NotFoundError('Пользователь не найден'))
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы неккоректные данные при обновлении информации о пользователе'));
      } else {
        next(err);
      }
    });
};

const updateUserAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, updateOptions)
    .orFail(new NotFoundError('Пользователь не найден'))
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы неккоректные данные при обновлении аватара пользователя'));
      } else {
        next(err);
      }
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      // создаём токен, записываем id в пейлоуд
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
      // записываем токен в тело ответа
      res.status(200).send({ token }); // возвращаем токен, который будем пробрасывать в запросы

      // записываем токен в куку и отправляем
      // res
      //   .status(200)
      //   .cookie('token', token, {
      //     httpOnly: true,
      //     sameSite: true,
      //     maxAge: 1000 * 60 * 60 * 24 * 7, // s*m*h*d*w
      //   })
      //   .send({ message: 'Логин прошёл успешно' });
    })
    .catch(next);
};

module.exports = {
  getUsers,
  getUserById,
  getUserInformation,
  createUser,
  updateUser,
  updateUserAvatar,
  login,
};
