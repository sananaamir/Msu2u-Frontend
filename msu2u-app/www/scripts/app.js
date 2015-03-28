'use strict';

/**
 * @ngdoc overview
 * @name msu2uAppApp
 * @description
 * # msu2uAppApp
 *
 * Main module of the application.
 */
angular
  .module('msu2uAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
    .when('/directory', {
        templateUrl: 'views/directory.html',
        controller: 'DirectorycontrollerCtrl'
    })
    .when('/maps', {
        templateUrl: 'views/maps.html',
        controller: ''
    })
    .when('/wfma', {
        templateUrl: 'views/wfma.html',
        controller: 'WfmacontrollerCtrl'
    })
    .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewscontrollerCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
