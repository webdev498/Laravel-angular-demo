angular.module('app').config(function($routeProvider) {
  $routeProvider.when('/shows', {
    templateUrl: 'features/shows/shows.tpl.html',
    controller: 'Shows'
  });
});
