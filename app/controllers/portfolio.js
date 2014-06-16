import Ember from "ember";

export default Ember.ObjectController.extend({
  queryParams: ['field'],
  field: null,

  filteredProjects: function() {
    var field = this.get('field');
    var projects = this.get('content');

    if (field) {
      return projects.filter(function(item){
        return item.fields.contains(field);
      });
    } else {
      return projects;
    }
  }.property('field', 'model')
});
