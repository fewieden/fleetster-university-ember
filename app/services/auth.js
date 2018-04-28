import { bool } from '@ember/object/computed';
import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  api: service(),
  router: service(),

  token: localStorage.getItem('token'),

  async authenticate(id, password) {
    const response = await this.get('api').request({
      type: 'POST',
      url: 'http://localhost:8080/login',
      data: {
        _id: id,
        password
      }
    });

    if (!response.error) {
      localStorage.setItem('token', response.token);
      this.set('token', response.token);
      return true;
    }

    return false;
  },

  async logout() {
    await this.get('api').request({
      type: 'POST',
      url: 'http://localhost:8080/logout',
      data: {}
    });

    localStorage.removeItem('token');
    this.set('token', null);

    this.get('router').transitionTo('login');
  },

  isAuthenticated: bool('token')

});
