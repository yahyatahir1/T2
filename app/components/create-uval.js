import Component from '@ember/component';

export default Component.extend({
//Empty strings
materialName: '',
thickness: '',
kValue: '',

//adding uval function
actions:{
    addUval()
    {
      //get form data
      let materialName=this.get('materialName');
      let thickness=this.get('thickness');
      let kValue=this.get('kValue');

    // Pass the data up to the controller
    this.get('addUval')({
      materialName: materialName,
      thickness: thickness,
      kValue: kValue,
    });

    // Clears the form
    this.emptyForm();
    }
  },
    emptyForm()
      {
        this.set('materialName', '');
        this.set('thickness', '');
        this.set('kValue', '');
      }
});
