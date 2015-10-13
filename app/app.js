var app = angular.module('Flower', [
  'ngRoute',
  'ngAria',
  'ngAnimate',
  'ngMaterial',
  'Flower.Config',
  'Flower.Encode.Converter',
  'Flower.Template',
  'Flower.CrossDomain.Iframe'
]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('red');
});
