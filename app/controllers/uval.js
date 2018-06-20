import Controller from '@ember/controller';

export default Controller.extend({
  init(){
    this.get('store').createRecord('uval',{
      materialName: 'Outside Surface',
      resistivityOverride: '0.04'
    });

    this.get('store').createRecord('uval',{
      materialName: 'Inside Surface',
      resistivityOverride: '0.13'
    });
  },
  
  actions: {
    addUval(data)
    {
      // Creates the uval and adds it to the store
      this.get('store').createRecord('uval', data);
    }
  }
});
