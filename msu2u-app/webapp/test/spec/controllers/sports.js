'use strict';

describe('Controller: SportsCtrl', function () {

  // load the controller's module
  beforeEach(module('msu2uAppApp'));

  var SportsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SportsCtrl = $controller('SportsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
