import $api from '../http/index';

export default class UserServices {
  async getAllUsers() {
    return $api.get('/users');
  }
  async getUserById(id) {
    return $api.get(`/users/find/${id}`);
  }
  async updateUser(user) {
    return $api.put(`/users/${user.id}`, user);
  }
  async deleteUser(id) {
    return $api.delete(`/users/${id}`);
  }
  async deleteAllUsers() {
    return $api.delete('/users');
  }
}
