import Ember from "ember";
import PortfolioAdapter from "../adapters/portfolio";

export default Ember.ObjectController.extend({
  getPortfolioItems: function() {
    var self = this;
    var adapter = PortfolioAdapter.create();

    adapter.findAll().then(function(items) {
      self.set('portfolio', items
        .rejectBy('id', self.get('id'))
        .filter(function(item, index) {
          return index < 4;
        })
      );
    });
  }.observes('id'),

  portfolio: []
});
