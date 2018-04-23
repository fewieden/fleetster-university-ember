import Controller from '@ember/controller';

export default Controller.extend({
  auth: Ember.inject.service(),

  actions: {
    async login() {
      const success = await this.get('auth').authenticate(this.get('id'), this.get('password'));
      if (success) {
        return this.transitionToRoute('user', {id: this.get('id')});
      }

      alert('Login failed!');
      this.transitionToRoute('register');
    }
  }
});
