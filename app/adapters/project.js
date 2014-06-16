import ajax from 'ic-ajax';
import Ember from "ember";
import memoize from './memoizer';

export default Ember.Object.extend({
  find: memoize( function(id) {
    var url = 'http://www.behance.net/v2/projects/' + id + '?api_key=np1FB2eTl6xF3iJHz6ttXpC5xKvFXkOP';
    return ajax(url, { dataType: 'jsonp' })
      .then(function(data) {
        return data.project;
      });
  })
});
