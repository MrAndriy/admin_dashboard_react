const ApiError = require('../error/ApiError.js');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

//function to generate token
const generateJwt = (id, email, role, fullname) => {
  const sekret_Key = config.get('jwtSecret');
  return jwt.sign({ id, email, role, fullname }, sekret_Key, {
    expiresIn: '3h',
  });
};

//function to hash password
const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Not correct values while registration',
        });
      }
      //check if user with this email exists
      const { email, password, role, fullname } = req.body;
      const candidateEmail = await User.findOne({
        email: email,
      });
      const candidateFullName = await User.findOne({ fullname: fullname });
      if (candidateEmail || candidateFullName) {
        return next(
          ApiError.badRequest(
            `${candidateEmail ? 'Email' : 'Full Name'} is allready exists`
          )
        );
      }
      //create user
      const user = await User.create({
        email,
        password: hashPassword(password),
        fullname,
      });
      const token = generateJwt(user.id, user.email, user.role, user.fullname);
      return res.json({ message: 'User created successfully', token });
    } catch (e) {
      return next(ApiError.internal(e.message));
    }
  }

  //login user and send cookies token
  async login(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Not correct values while logging in',
        });
      }
      //check if user logined
      if (req.cookies.token) {
        return next(ApiError.badRequest('User is allready logged in'));
      }

      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return next(ApiError.NotFound('User not found'));
      }
      let comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return next(ApiError.badRequest('Password is incorrect'));
      }
      const token = generateJwt(user.id, user.email, user.role, user.fullname);
      //hide password and status isAdmin
      const { password: _, isAdmin: __, ...userData } = user.toObject();

      //return token in cookie and user data in response
      return res
        .cookie('token', token, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 3,
        })
        .status(200)
        .json({
          message: 'User logged in successfully',
          user: userData,
        });
    } catch (e) {
      return next(ApiError.internal(e.message));
    }
  }

  //logout user
  async logout(req, res, next) {
    try {
      //check if user is logged in
      if (!req.cookies.token) {
        return next(ApiError.Unauthorized());
      }
      //delete cookie
      res.clearCookie('token');
      return res.status(200).json({
        message: 'User logged out successfully',
      });
    } catch (e) {
      return res.status(500).json(ApiError.internal());
    }
  }

  //get all users
  async getAllUsers(req, res, next) {
    try {
      const users = await User.find({});
      //check if users is empty
      if (users.length === 0) {
        return next(ApiError.notFound('User not found'));
      }
      return res.status(200).json({
        //count how much users in db and send it to frontend
        message: `${users.length}  ${
          users.length == 1 ? 'user' : 'users'
        } found`,
        users,
      });
    } catch (e) {
      return next(ApiError.internal(e.message));
    }
  }

  //get user by id
  async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) {
        return next(ApiError.NotFound('User not found'));
      }
      return res.status(200).json({
        message: 'User found',
        user,
      });
    } catch (e) {
      return next(ApiError.internal(e.message));
    }
  }

  //update user by Id
  async updateUser(req, res, next) {
    try {
      const { id } = req.params;
      const { fullname, email, password } = req.body;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
      //check if user with this email exists
      const userWithThisEmail = await User.findOne({ email });
      if (userWithThisEmail && userWithThisEmail._id != id) {
        return res.status(400).json({
          message: 'User with this email already exists',
        });
      }
      //check if user want to change email
      if (email) {
        user.email = email;
      }
      //check if user want to change password
      if (password) {
        const hashedPassword = hashPassword(password);
        user.password = hashedPassword;
      }
      //check if user want to change fullname
      if (fullname) {
        user.fullname = fullname;
      }
      await user.save();
      return res.status(200).json({
        message: 'User updated successfully',
        user,
      });
    } catch (e) {
      return next(ApiError.internal(e.message));
    }
  }

  //delete user by id
  async deleteUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        return res.status(404).json({
          message: 'User not found',
        });
      }
      return res.status(200).json({
        message: 'User deleted successfully',
        user,
      });
    } catch (e) {
      return next(ApiError.internal(e.message));
    }
  }

  //delete all users
  async deleteAllUsers(req, res, next) {
    try {
      const users = await User.deleteMany();
      return res.status(200).json({
        message: 'Users deleted successfully',
        users,
      });
    } catch (e) {
      return next(ApiError.internal(e.message));
    }
  }
}

module.exports = new UserController();
