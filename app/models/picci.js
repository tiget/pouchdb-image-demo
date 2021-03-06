import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  rev: DS.attr('string'),
  photos: DS.attr('attachment', {
    defaultValue: function() {
      return [];
    }
  })
});
