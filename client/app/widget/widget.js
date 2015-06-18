'use strict';

angular.module('quickApiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('widget', {
        url: '/widget',
        templateUrl: 'app/widget/widget.html',
        controller: 'WidgetCtrl',
        authenticate: true
      });
  });