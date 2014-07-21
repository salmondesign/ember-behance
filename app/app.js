import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  rootElement: '#app-container',
  modulePrefix: 'ember-behance-portfolio', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'ember-behance-portfolio');

export default App;
