'use strict';

angular.module('giv2givAngularApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/endowment/:name', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/endowment/foundation-name'
      });
  });
