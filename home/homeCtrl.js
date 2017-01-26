angular.module("app").controller("homeCtrl", function($scope) {

  $scope.goToGame = function() {
    $state.go(game);
  }

});
