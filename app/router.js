import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberBehancePortfolioENV.locationType
});

Router.map(function() {
  this.resource('projects', { path: '/' });
  this.resource('project', { path: '/:project_id' });
});

export default Router;
