'use strict';

angular.module('giv2givAngularApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/endowment/:name', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contribute', {
        templateUrl: 'views/contribute.html',
        controller: 'ContributeCtrl'
      })
      .otherwise({
        redirectTo: '/endowment/foundation-name'
      });
  });
