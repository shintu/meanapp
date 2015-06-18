'use strict';

angular.module('quickApiApp')
  .controller('InsightCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/api/insights').success(function onSuccess(response) {
      $scope.insights = response;
    });
  }]);