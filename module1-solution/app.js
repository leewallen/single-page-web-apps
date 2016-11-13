(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {

  $scope.colors ={};
  $scope.colors.current = {color: "green"};
  $scope.lunchItems = "";
  $scope.numItemsMessage = "";

  $scope.checkNumItems = function() {
    var numItems = $scope.getNumItems();
    switch(numItems) {
      case 0:
        $scope.numItemsMessage = "Please enter data first";
        $scope.turnOrange();
        break;
      case 1:
      case 2:
      case 3:
        $scope.numItemsMessage = "Enjoy!";
        $scope.turnGreen();
        break;
      default:
          $scope.numItemsMessage = "Too much!";
          $scope.turnRed();
          break;
    }
  };

  $scope.showNumItemsMessage = function() {
    return $scope.numItemsMessage;
  }

  $scope.getNumItems = function() {
    var lunchItemsArray = $scope.lunchItems.split(',');
    var count = 0;

    for (var i = 0; i < lunchItemsArray.length; i++) {
      if (lunchItemsArray[i]) {
        count++;
      }
    }
    return count;
  }

  $scope.turnGreen = function (){
    $scope.colors.current = {color: "green"};
  };

  $scope.turnRed = function (){
    $scope.colors.current = {color: "red"};
  };

  $scope.turnOrange = function (){
    $scope.colors.current = {color: "orange"};
  };

}
})();
