import DS from 'ember-data';

export default DS.Model.extend({
    materialName: DS.attr('string'),
    thickness: DS.attr('string'),
    kValue: DS.attr('string'),
    resistivityOverride: DS.attr('string'),

    // Computed proprty to calculate the resistivity
    resistivity: Ember.computed('thickness', 'kValue', function()
    {
      // We have an override so use it
      if (parseFloat(this.get('resistivityOverride'))) {
        return parseFloat(this.get('resistivityOverride'));
      }

      // No k-value is set so return zero
      if (!parseFloat(this.get('kValue'))) {
        return 0;
      }

      // Calculate the resistance
      return parseFloat(this.get('thickness')) / parseFloat(this.get('kValue'));
    })
});
