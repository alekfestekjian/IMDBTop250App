/* Sample Controller */

app.controller('galleryController', ['$scope', '$http',function($scope,$http) {
    $http.get('./data/imdb250.json').
    success(function(data, status, headers, config) {
      $scope.movies = data;

    }).
    error(function(data, status, headers, config) {

    });
}]);

app.controller('listController', ['$scope','$http',function($scope,$http,$routeParams) {
  $http.get('./data/imdb250.json').
  success(function(data, status, headers, config) {
    $scope.movies = data;


  }).
  error(function(data, status, headers, config) {

  });

}]);

app.controller('detailsController', ['$scope', '$http','$routeParams',function($scope,$http,$routeParams) {
  $http.get('./data/imdb250.json').
  success(function(data, status, headers, config) {
    $scope.movies = data;

  }).
  error(function(data, status, headers, config) {

  });
  $scope.imdbID = $routeParams.imdbID;

}]);
