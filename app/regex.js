if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var reg = /\d/;
        var result = reg.test(str);
        return result;
    },

    containsRepeatingLetter : function(str) {
        var hasDuplicates = (/([a-zA-Z]).*?\1/).test(str);
        return hasDuplicates;
    },

    endsWithVowel : function(str) {
        return /[AEIOUaeiou]$/.test(str)
    },

    captureThreeNumbers : function(str) {
        captureThreeNumbers : function(str) {
        var matches = /\d{3}/.exec(str);
        return matches ? matches[0] : false;
        },
    },

    matchesPattern : function(str) {
        return /^\d\d\d-\d\d\d-\d\d\d\d$/.test(str)
    },

    isUSD : function(str) {

    }
  };
});
