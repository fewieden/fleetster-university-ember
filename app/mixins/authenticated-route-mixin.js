import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  auth: service(),

  beforeModel() {
    if (!this.get('auth').isAuthenticated) {
      this.get('toast').error('Unauthorized');
      this.transitionTo('login');
    }
  }
});
