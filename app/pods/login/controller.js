import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  auth: service(),

  actions: {
    async login() {
      const success = await this.get('auth').authenticate(this.get('id'), this.get('password'));
      if (success) {
        return this.transitionToRoute(`/user/${this.get('id')}`);
      }

      this.get('toast').error('Login failed!');
    }
  }
});
