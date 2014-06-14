import Ember from "ember";
import ProjectAdapter from "../adapters/project";

export default Ember.Route.extend({
  model: function(params) {
    var adapter = ProjectAdapter.create();
    return adapter.find(params.project_id)
  }
 });
