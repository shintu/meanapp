'use strict';

describe('Controller: WidgetCtrl', function () {

  // load the controller's module
  beforeEach(module('quickApiApp'));

  var WidgetCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WidgetCtrl = $controller('WidgetCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
