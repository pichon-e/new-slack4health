(function() {
  'use strict';

  angular
    .module('slack4Health')
    .controller('PrescriptionController', PrescriptionController);

  /** @ngInject */
  function PrescriptionController($rootScope, $scope, $state) {

    $scope.goToBio = function() {
        $state.go("bio");
    }

    $scope.goToFolder = function() {
        $state.go("folder");
    }
  }
})();
