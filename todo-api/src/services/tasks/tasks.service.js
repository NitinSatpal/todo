'use strict';

// Initializes the `tasks` service on path `/tasks`
const createService = require('feathers-mongodb');
const hooks = require('./tasks.hooks');
const filters = require('./tasks.filters');

module.exports = function () {
  const app = this;
  const paginate = { default: 500, max: 1000 };
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/tasks', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tasks');
  mongoClient.then(db => {
    service.Model = db.collection('tasks');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
