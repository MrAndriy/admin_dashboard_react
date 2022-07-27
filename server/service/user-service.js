const UserModel = require('../models/User');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const mailService = require('./mail-service');
const tokenService = require('./token-service');
const UserDto = require('../dto/user-dto');
const ApiError = require('../error/ApiError');

class UserService {
  async registration({ email, password, fullname, country, city, phone, img }) {
    //check if user with this email exists
    const candidateEmail = await UserModel.findOne({ email });
    const candidateName = await UserModel.findOne({ fullname });
    if (candidateEmail || candidateName) {
      throw ApiError.BadRequest(
        `User with ${
          candidateEmail ? 'email ' + email : 'full name ' + fullname
        } is allready exists`
      );
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4(); // v34fa-asfasf-142saf-sa-asf

    const user = await UserModel.create({
      email,
      password: hashPassword,
      fullname,
      country,
      city,
      phone,
      activationLink,
      img,
      role: 'USER',
    });
    await mailService.sendActivationMail(
      email,
      `${process.env.API_URL}/api/users/activate/${activationLink}`
    );

    const userDto = new UserDto(user); // id, email, isActivated
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest('Not correct activation link');
    }
    user.isActivated = true;
    await user.save();
  }

  async login({ email, password }) {
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest('User not found');
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest('Password is incorrect');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.Unauthorized();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.Unauthorized();
    }
    const user = await UserModel.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    const users = await UserModel.find();
    return users;
  }

  async getUserById(id) {
    const user = await UserModel.findById(id);
    if (!user) {
      throw ApiError.NotFound('User not found');
    }
    return user;
  }

  async updateUser(
    id,
    { fullname, email, password, country, city, phone, img }
  ) {
    const user = await UserModel.findById(id);
    if (!user) {
      throw ApiError.NotFound('User not found');
    }
    if (email) {
      const candidate = await UserModel.findOne({ email });
      if (candidate && candidate.id !== id) {
        throw ApiError.BadRequest(
          `User with email ${email} is allready exists`
        );
      }
    }
    if (password) {
      const hashPassword = await bcrypt.hash(password, 3);
      user.password = hashPassword;
    }
    if (fullname) {
      user.fullname = fullname;
    }
    if (country) {
      user.country = country;
    }
    if (city) {
      user.city = city;
    }
    if (phone) {
      user.phone = phone;
    }
    if (img) {
      user.img = img;
    }
    await user.save();
    return user;
  }

  async deleteUserById(id) {
    const user = await UserModel.findById(id);
    if (!user) {
      throw ApiError.NotFound('User not found');
    }
    await user.remove();
    return user;
  }

  async deleteAllUsers() {
    const users = await UserModel.deleteMany();
    if (users.deletedCount === 0) {
      throw ApiError.NotFound('Users not found');
    }
    return users;
  }
}

module.exports = new UserService();
