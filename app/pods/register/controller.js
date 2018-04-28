import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  api: service(),

  name: null,
  email: null,
  password: null,
  passwordConfirmation: null,

  actions: {
    async register() {
      const response = await this.get('api').request({
        type: 'POST',
        url: 'http://localhost:8080/register',
        data: {
          name: this.get('name'),
          email: this.get('email'),
          password: this.get('password')
        }
      });

      if (!response.error) {
        this.get('toast').info(`ID: ${response._id}`);
        return this.transitionToRoute('login');
      }

      this.get('toast').error('Registration failed!');
    }
  }
});
