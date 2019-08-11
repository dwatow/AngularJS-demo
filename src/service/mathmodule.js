import angular from "angular";

export default angular
  .module("mathservice", [])
  .factory("mathservice", function() {
    var addTwoNumbers = function(x, y) {
      return x + y;
    };

    var multiplyTwoNumbers = function(x, y) {
      return x * y;
    };

    return {
      addTwoNumbers,
      multiplyTwoNumbers,
    };
  }).name;
