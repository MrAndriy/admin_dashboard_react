import $api from '../http/index';

class AuthServices {
  async login({ email, password }) {
    try {
      return $api.post('/users/login', { email, password });
    } catch (error) {
      console.log(error);
    }
  }

  async register(name, email, password, fullname, country, city, phone, img) {
    try {
      return $api.post('/users/registration', {
        name,
        email,
        password,
        fullname,
        country,
        city,
        phone,
        img,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    return $api.post('/users/logout');
  }
}

export default new AuthServices();
