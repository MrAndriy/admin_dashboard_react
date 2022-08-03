import $api from '../http/index';

class AuthServices {
  async login({email, password}) {
    return $api.post('/users/login', { email, password });
  }

  async register(name, email, password, fullname, country, city, phone, img) {
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
  }

  async logout() {
    return $api.post('/users/logout');
  }
}

export default new AuthServices();
