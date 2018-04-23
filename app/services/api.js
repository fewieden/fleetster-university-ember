import Service from '@ember/service';
import { inject as service } from '@ember/service';

const defaultOptions = {
  type: 'GET',
  headers: {},
  contentType: 'application/json'
};

export default Service.extend({
  auth: service(),

  request(options) {
    options = Object.assign({}, defaultOptions, options);
    if (options.data) {
      options.data = JSON.stringify(options.data);
    }

    if (this.get('auth').isAuthenticated) {
      options.headers.authentication = this.get('auth').token;
    }

    return Ember.$.ajax(options);
  }
});
