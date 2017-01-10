angular.module('app').controller('Shows', function($scope, $http) {
  $http.get('/api/shows').then(function(result) {
    $scope.shows = result.data;
  });
});
