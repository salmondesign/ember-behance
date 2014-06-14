import DS from "ember-data";

export default DS.RESTAdapter.reopen({
  host: 'http://www.behance.net',
  namespace: 'v2',
  ajax: function(url, method, hash) {
    url = url + '?api_key=np1FB2eTl6xF3iJHz6ttXpC5xKvFXkOP';
    return this._super(url, method, hash);
  },
  findAll: function(store, type, sinceToken) {
    var query;

    if (sinceToken) {
      query = { since: sinceToken };
    }

    return this.ajax(this.buildURL('users', 'rachelmsalmon/projects'), 'GET', { data: query });
  },
});
