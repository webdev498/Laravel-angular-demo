angular.module('app').config(function($routeProvider, $locationProvider) {
  $routeProvider.otherwise('/shows');

  $locationProvider.html5Mode(true).hashPrefix('!');
});
