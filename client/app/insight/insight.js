'use strict';

angular.module('quickApiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('insight', {
        url: '/insight',
        templateUrl: 'app/insight/insight.html',
        controller: 'InsightCtrl',
        authenticate: true
      });
  });