var app = angular.module('Flower.Encode.Converter', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/encode/convert', {
        templateUrl: '/app/encode/view/convert.html',
        controller: 'ConverterController',
        controllerAs: 'converter'
      })
}]);

app.service('encodingService', function() {
  var encoding = {
    Utf8: 'Utf8',
    Utf16: 'Utf16',
    Base64: 'Base64',
    Latin1: 'Latin1',
    Hex: 'Hex'
//    UrlEncode: 'UrlEncode'
  };
  var state = {
    from: encoding.Utf8,
    to: encoding.Base64
  };

  this.convert = function(text) {
    try {
      //if(state.to in CryptoJS.enc && state.to in CryptoJS.from) {
        return CryptoJS.enc[state.to].stringify(
          CryptoJS.enc[state.from].parse(text)
        );
      //}
      //switch(state)
      //conole.log('Looking for non Cryto')
    } catch(e) {
      console.warn(e.message);
    }
  };

  this.getEncodings = function(){
    return Object.keys(encoding);
  }

  this.setFrom = function(encodingFrom) {
    if(encoding[encodingFrom] === undefined) {
      console.warn('\''+encodingFrom+'\ not found¨. Mode is '+state);
    } else {
      state.from = encodingFrom;
    }
  }

  this.setTo = function(encodingTo){
    if(encoding[encodingTo] === undefined) {
      console.warn('\''+encodingTo+'\ not found¨. Mode is '+state);
    } else {
      state.to = encodingTo;
    }
  }

  this.getState = function(){
    return state;
  };
});

app.controller(
  'ConverterController',
  function(encodingService) {
    this.getEncodings = function(){
      return encodingService.getEncodings();
    };

    this.getState = function(){
      return encodingService.getState();
    };

    this.setTo = function(encoding){
      encodingService.setTo(encoding);
    };

    this.setFrom = function(encoding) {
      encodingService.setFrom(encoding);
    };

    this.setMode = function(mode) {
      encodingService.setMode(mode);
    };

    this.convert = function(text) {
      return encodingService.convert(text);
    };
  }
);
