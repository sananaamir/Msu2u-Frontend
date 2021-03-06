'use strict';

/**
 * @ngdoc function
 * @name msu2uAppApp.controller:NewscontrollerCtrl
 * @description
 * # NewscontrollerCtrl
 * Controller of the msu2uAppApp
 */
angular.module('msu2uAppApp')
  .controller('NewscontrollerCtrl', function ($scope, $http, $templateCache) {
    $scope.fetch = function(){
        
        $scope.code = 'null';
        $scope.response = 'null';
        
        $http({
              method: 'GET', 
              url: 'http://cs.mwsu.edu/msu2u-api/v1/news',
              cache: $templateCache
          }).
          success(function(data, status) {
              $scope.status = status;
              $scope.data = data;
          }).
          error(function(data, status) {
          $scope.data = data || 'Request failed';
          $scope.status = status;
          });
        
    };
    
    $scope.fetch();
    
  });
