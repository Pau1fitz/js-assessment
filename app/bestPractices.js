if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
      
    },

    functions : function(flag) {
      if (flag) {
        function getValue() { return 'a'; }
      } else {
        function getValue() { return 'a'; }
      }

      return getValue();
    },

    parseInt : function(num, radix) {
      return parseInt(num, 10);
    },

    identity : function(val1, val2) {
      if(val1 === val2){
        return true;
      }
      else{
        return false;
      }
    }
  };
});
