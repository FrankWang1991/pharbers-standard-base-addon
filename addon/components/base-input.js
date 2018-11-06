import Component from '@ember/component';
import layout from '../templates/components/base-input';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  positionalParams: ['params','size'],
  classNameBindings: ['sizeClass'],
  sizeClass: computed("sizeClass",function() {
    return this.get("size");
  }),
  isChangeIcon: computed("inputValue",function(){
    if(this.get("inputValue").length !== 0){
      return false;
    }
    return true;
  }),
  actions: {
    click: function() {
      //  发送到控制器中的方法，
      this.sendAction("act", this.get("inputValue"));
    }
  },
});
