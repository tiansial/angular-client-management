'use strict';

/**
 * @ngdoc function
 * @name angularClientManagementApp.controller:ListBottomSheetCtrl
 * @description
 * # ListBottomSheetCtrl
 * Controller of the angularClientManagementApp
 */

 angular.module('angularClientManagementApp').controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
   $scope.items = [
     { name: 'Share', icon: 'share' },
     { name: 'Upload', icon: 'upload' },
     { name: 'Copy', icon: 'copy' },
     { name: 'Print this page', icon: 'print' },
   ];

   $scope.listItemClick = function($index) {
     var clickedItem = $scope.items[$index];
     $mdBottomSheet.hide(clickedItem);
   };
 });
