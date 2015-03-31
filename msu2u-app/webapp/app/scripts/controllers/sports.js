'use strict';

/**
 * @ngdoc function
 * @name msu2uAppApp.controller:SportsCtrl
 * @description
 * # SportsCtrl
 * Controller of the msu2uAppApp
 */
angular.module('msu2uAppApp')
  .controller('SportsCtrl', function ($scope, $http, $templateCache) {
    $scope.fetch = function(){
        
        $scope.code = 'null';
        $scope.response = 'null';
        
        $http({
              method: 'GET', 
              url: 'https://secure.mwsu.edu/api-2/public/sports',
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
