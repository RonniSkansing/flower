var app = angular.module('Flower.CrossDomain.Iframe', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', '$sceProvider',
  function($routeProvider, $locationProvider, $sceProvider) {
    $sceProvider.enabled(false);
    $routeProvider.when('/crossdomain/iframe', {
      templateUrl: '/app/crossdomain/iframe/view/iframe.html',
      controller: 'CrosdomainIframeController',
      controllerAs: 'iframe'
    });
  }
]);

app.controller('CrosdomainIframeController', function($timeout) {
  var upcomingSource = '';
  var source = '';
  var timeout = 2000;
  var refreshPromise;

  this.set = (newSource) => {
    upcomingSource = newSource;
    refresh();
  };

  this.setTimeout = (miliseconds) => {
    timeout = miliseconds;
  };

  var refresh = () => {
    if(refreshPromise) {
      $timeout.cancel(refreshPromise);
    }
    refreshPromise = $timeout( () => {
      source = upcomingSource;
    }, timeout);
  };

  this.get = () => {
    return source;
  };
});
