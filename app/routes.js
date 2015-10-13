angular.module('Flower.Config.Routes',
  [
    'ngRoute',
  ]
).config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/app/template/view/frontpage.html',
      })
      $locationProvider.html5Mode(true);
}]);
