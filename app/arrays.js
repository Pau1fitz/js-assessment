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
            if(arr[i] === item){
                arr.splice(i, 1);
            }
        };
        return arr;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        var result = arr1.concat(arr2);
        return result;
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
