import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  api: service(),

  model(params) {
    return this.get('api').request({
      url: `http://localhost:8080/user/${params.id}`
    });
  }
});
