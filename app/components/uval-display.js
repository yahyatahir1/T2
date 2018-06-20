import Component from '@ember/component';

export default Component.extend({
  actions: {

    // Delete function
    deleteUval(uval)
    {
      // Removes the current record
      uval.unloadRecord();
    }
  }
});
