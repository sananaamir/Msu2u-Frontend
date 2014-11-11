'use strict';

describe('Controller: NewscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('msu2uAppApp'));

  var NewscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewscontrollerCtrl = $controller('NewscontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
