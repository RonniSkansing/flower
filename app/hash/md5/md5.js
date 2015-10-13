var app = angular.module('Flower.Hash', ['ngRoute']);
/*
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/hash/', {
        templateUrl: '/dot??????????????',
        controller: 'md5controller',
        controllerAs: 'converter'
      })
}]);
*/
app.service('hashingService', function() {
  var crypt = CryptoJS;

  this.md5 = (text) => {
     return crypt.MD5(text);
  };

  this.sha1 = (text) => {
    return crypt.SHA1(text);
  };

  this.sha256 = (text) => {
    return crypt.SHA256(text);
  };

  this.sha1 = (text)
});

app.controller(
  'HashingController',
  function(hashingService) {
    this.md5 = (text) => {
       return hashingService.md5(text);
    };

    this.sha1 = (text) => {
      return hashingService.sha1(text);
    };

    this.sha256 = (text) => {
      return hashingService.sha256(text);
    };
  }
);
