'use strict';

 
Stripe.setPublishableKey('pk_test_3j0y9oG0BYaFWw8DbkpRiXQt')

angular.module('quickApiApp')
  .controller('paymentCtrl', ['$scope', 'Auth', function($scope, Auth) {
    $scope.clientId = Auth.getCurrentUser()._id;
     $scope.handleStripe = function(status, response){
      console.log("result",response)
        if(response.error) {
          $('.stripe_error').show().css("color","red").html(response.error.message);
          $('.stripe_error').delay(2000).hide(2000);
          console.log("error",response.error);
          //result.error.message
          // there was an error. Fix it.
        }else{
          // got stripe token, now charge it or smt
          var token = response.id
          console.log("stripe_token",token);
          $http.post('/charge', function(status, response) {
                console.log(response);
                var stripeToken = token;
                var charge = stripe.charges.create({
                    amount: 5000, // amount in cents, again
                    currency: "usd",
                    card: stripeToken,
                    description: "email@email.com"
                }, function(err, charge) {
                    if (err && err.type === 'StripeCardError') {
                        console.log(JSON.stringify(err, null, 2));
                    }
                    console.log("completed payment!");
                    res.send("completed payment!");
                });
            });
          console.log("test");
        }
      }
  }]);

