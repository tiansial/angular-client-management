/*global angular */
/*jshint unused:false */
'use strict';

/**
 * @ngdoc function
 * @name angularClientManagementApp.controller:ClientCtrl
 * @description
 * # ClientCtrl
 * Controller of the angularClientManagementApp
 */
app.controller('ClientCtrl', ['$scope', '$firebaseArray',function($scope, $firebaseArray) {
      var url = 'https://gestaoyunik.firebaseio.com/clients';
      var fireRef = new Firebase(url);
    }
]);
