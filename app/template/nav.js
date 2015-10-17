var app = angular.module('Flower.Template', ['ngMaterial']);

app.directive('navigation', function(){
  return {
    controller: 'NavigationController',
    controllerAs: 'navigation',
    templateUrl: '/app/template/view/nav.html'
  };
});

app.controller('NavigationController', ['$mdSidenav', function($mdSidenav){
  var menu = {
    xss: ''
  };

  this.getMenu = function() {

  };

  this.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
}]);
