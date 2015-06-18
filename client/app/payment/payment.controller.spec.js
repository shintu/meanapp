'use strict';

describe('Controller: paymentCtrl', function () {

  // load the controller's module
  beforeEach(module('quickApiApp'));

  var WidgetCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WidgetCtrl = $controller('paymentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
