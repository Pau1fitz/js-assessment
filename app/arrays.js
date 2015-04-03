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
        for (var i = 0; i < arr.length; i++) {
               if(arr[i] === item){
                arr.splice(i, 2);
            }
        };
        return arr;
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
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var counter = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                counter+=1;
            }
        }
        return counter;
    },

    duplicates : function(arr) {

    },

    square : function(arr) {
        var answer = [];
        for (var i = 0; i < arr.length; i++) {
            var number = arr[i] * arr[i];
            answer.push(number);
        };
        return answer;
    },

    findAllOccurrences : function(arr, target) {
        var answer = [];
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] === target){
                answer.push(i)
            }
        };
        return answer;
    }
}
});
