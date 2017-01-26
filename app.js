angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './homeView.html'
    })
    .state('game', {
      url: '/game',
      templateUrl: './gameView.html'
    })

  $urlRouterProvider
    .otherwise('/game');
});
