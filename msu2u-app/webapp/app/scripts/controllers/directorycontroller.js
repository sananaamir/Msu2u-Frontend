'use strict';

/**
 * @ngdoc function
 * @name msu2uAppApp.controller:DirectorycontrollerCtrl
 * @description
 * # DirectorycontrollerCtrl
 * Controller of the msu2uAppApp
 */
angular.module('msu2uAppApp')
  .controller('DirectorycontrollerCtrl', function ($scope, $http, $templateCache) {

      $scope.fetch = function(){
        
        $scope.code = 'null';
        $scope.response = 'null';
        
        $http({
              method: 'GET', 
              url: 'http://api.randomuser.me/?results=5&seed=foobar',
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
