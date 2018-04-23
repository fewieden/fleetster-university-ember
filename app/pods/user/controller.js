import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  auth: service(),

  actions: {
    async logout() {
      await this.get('auth').logout();

      this.transitionToRoute('login');
    }
  }
});
