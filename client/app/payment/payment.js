'use strict';

angular.module('quickApiApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('payment', {
        url: '/payment',
        templateUrl: 'app/payment/payment.html',
        controller: 'paymentCtrl',
         authenticate: true
      });
  });
