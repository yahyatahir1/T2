import Component from '@ember/component';

export default Component.extend({
  //delete function
actions: {
  deleteUval(uval)
  {
    // Removes the current record
    uval.unloadRecord();
  }
}
});
