import Ember from "ember";

export default Ember.ObjectController.extend({
  queryParams: ['field'],
  field: null,

  init: function() {
    var self = this;

    $('#home').on('click', function(e){
      self.clearFilter();
      e.preventDefault();
    });
  },

  filteredProjects: function() {
    var field = this.get('field');
    var projects = this.get('model');

    if (field && field !== "null") {
      return projects.filter(function(item){
        return item.fields.contains(field);
      });
    } else {
      return projects;
    }
  }.property('field', 'model'),

  clearFilter: function() {
    this.set('field', null);
    this.transitionToRoute('application');
  }
});
