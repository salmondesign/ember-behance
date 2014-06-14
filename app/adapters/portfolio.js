import ajax from 'ic-ajax';
import Ember from "ember";

export default Ember.Object.extend({
  findAll: function() {
    var url = 'http://www.behance.net/v2/users/rachelmsalmon/projects?api_key=np1FB2eTl6xF3iJHz6ttXpC5xKvFXkOP';
    return ajax(url).then(function(data) {
      return data.projects;
    });
  }
});
