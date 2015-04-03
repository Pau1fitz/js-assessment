if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] === item){
                return i;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var ans = 0;
        for (var i = 0; i < arr.length; i++) {
           ans += arr[i];
        };
        return ans;
    },

    remove : function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i])
            if(arr[i] === item){
                arr.splice(i, 1);
            }
        };
        console.log(arr)
        return arr;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
