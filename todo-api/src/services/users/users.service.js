'use strict';

// Initializes the `users` service on path `/users`
const createService = require('feathers-mongodb');
const hooks = require('./users.hooks');
const filters = require('./users.filters');
const errors = require('feathers-errors');
module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/users', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users');

  service.before({
    create(hook) {
      return app.service('users').find({
        query: { email: hook.data.email }
      }, hook.params).then(result => {
        if(result.data.length !== 0) {
          throw new errors.Conflict(`Email ${hook.data.email} already exists`);
        }
        return hook
      });
    }
  });

  service.before({
    patch(hook) {
      return app.service('users').find({
        query: { email: hook.data.email }
      }, hook.params).then(result => {
        console.log(JSON.stringify(result));
        if(result.data.length !== 0 && result.data[0]._id != hook.data._id) {
          throw new errors.Conflict(`Email ${hook.data.email} already exists`);
        }
        return hook
      });
    }
  });

  mongoClient.then(db => {
    service.Model = db.collection('users');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
