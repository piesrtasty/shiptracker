'use strict'

###*
 # @ngdoc overview
 # @name shiptrackerApp
 # @description
 # # shiptrackerApp
 #
 # Main module of the application.
###
angular
  .module 'shiptrackerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid'
  ]
  .config ($routeProvider) ->
    $routeProvider
      .when '/',
        templateUrl: 'views/main.html'
        controller: 'MainCtrl'
      .when '/about',
        templateUrl: 'views/about.html'
        controller: 'AboutCtrl'
      .when '/vessels',
        templateUrl: 'views/vessels.html'
        controller: 'VesselsCtrl'
      .otherwise
        redirectTo: '/'

