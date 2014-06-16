import Ember from "ember";

export default Ember.ObjectController.extend({
  needs: ['portfolio'],
  actions: {
    clearFilter: function() {
      var portfolio = this.get('controllers.portfolio');
      portfolio.set('field', null);
      this.transitionToRoute('application');
    }
  }
});
