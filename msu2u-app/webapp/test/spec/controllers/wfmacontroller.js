'use strict';

describe('Controller: WfmacontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('msu2uAppApp'));

  var WfmacontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WfmacontrollerCtrl = $controller('WfmacontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
