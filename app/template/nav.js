var app = angular.module('Flower.Template', ['ngMaterial']);

app.directive('navigation', () => {
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

  this.getMenu = () => {

  };

  this.toggleSidenav = (menuId) => {
    $mdSidenav(menuId).toggle();
  };
}]);
