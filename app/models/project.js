import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  covers: DS.attr(),
  modules: DS.attr(),
  tags: DS.attr(),

  thumbnail: function() {
    return this.get('covers')['230'];
  }.property('covers')
});
