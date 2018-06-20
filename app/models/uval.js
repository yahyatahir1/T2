import DS from 'ember-data';

export default DS.Model.extend({
    materialName: DS.attr('string'),
    thickness: DS.attr('string'),
    kValue: DS.attr('string'),
    resistivityOverride: DS.attr('string'),

    //computed proprty to calculate the Resistivity
    resistivity: Ember.computed('thickness', 'kValue', function()
    {
      if (parseFloat(this.get('resistivityOverride'))) {
        return parseFloat(this.get('resistivityOverride'));
      }

      if (!parseFloat(this.get('kValue'))) {
        return 0;
      }

      return parseFloat(this.get('thickness'))  /  parseFloat(this.get('kValue'));
    })
});
