(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.lunchItems = "";
  $scope.numItemsMessage = "";

  $scope.checkNumItems = function() {

    if ($scope.lunchItems == "") {
      $scope.numItemsMessage = "Please enter data first";
      return;
    }

    var lunchItemsArray = $scope.lunchItems.split(',');

    if (lunchItemsArray.length <= 3) {
      $scope.numItemsMessage = "Enjoy!";
    } else {
      $scope.numItemsMessage = "Too much!";
    }
  };

  $scope.showNumItemsMessage = function() {
      return $scope.numItemsMessage;
  }
}
})();
