'use strict';

/**
 * @ngdoc function
 * @name msu2uAppApp.controller:WfmacontrollerCtrl
 * @description
 * # WfmacontrollerCtrl
 * Controller of the msu2uAppApp
 */
angular.module('msu2uAppApp')
  .controller('WfmacontrollerCtrl', function ($scope, $http, $templateCache) {
    $scope.fetch = function(){
        //https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyD2zfFUvJ4pGZ5btaUlL4xPQ_59cBBf5MA%20&part=snippet,statistics
        //http://cs.mwsu.edu/msu2u-api/v1/wfma
        //UCZhSa5HFzWhRnu1zxHXOC5w
        $scope.code = 'null';
        $scope.response = 'null';
        
        $http({
              method: 'GET', 
              url: 'http://cs.mwsu.edu/msu2u-api/v1/wfma',
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
