(function () {
  'use strict';

angular.module('nameCalculator', [])
.controller('nameCalculatorController', function($scope) {
  $scope.name="";
  $scope.totalvalue = 0;

  $scope.displayNumeric = function () {
    var TotalNameValue = calculateNumericForSrtring($scope.name);
        $scope.totalvalue = TotalNameValue;
  };

  function calculateNumericForSrtring (string) {
    var totalStringValue=0;
    for(var i = 0; i<string.length;i++){
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
  };

});

})();
