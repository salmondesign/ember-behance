import Ember from "ember";
import PortfolioAdapter from "../adapters/portfolio";

export default Ember.Route.extend({
   model: function() {
     var adapter = PortfolioAdapter.create();
     return adapter.findAll();
   }
 });
