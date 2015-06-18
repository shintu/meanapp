'use strict';

angular.module('quickApiApp')
  .controller('WidgetCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.clientId = Auth.getCurrentUser()._id;
  }]);