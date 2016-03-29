(function() {
  'use strict';

  angular
    .module('slack4Health')
    .controller('BioController', BioController);

  /** @ngInject */
  function BioController($rootScope, $scope, $state, $location, $anchorScroll) {

    $scope.goToChat = function() {
        $state.go("chat");
    }

    $scope.goToPrescription = function() {
        $state.go("prescription");
    }

    $scope.dataset = [
        {
            picture: "boum",
            title: "Analyse"
        },
                {
            picture: "boum",
            title: "Biopsie"
        },
        {
            picture: "boum",
            title: "Radio"
        },
        {
            picture: "boum",
            title: "IRM"
        },
        {
            picture: "boum",
            title: "Analyse"
        },
                {
            picture: "boum",
            title: "Biopsie"
        },
        {
            picture: "boum",
            title: "Radio"
        },
        {
            picture: "boum",
            title: "IRM"
        }
    ]

    $location.hash("bottom");
    $anchorScroll();
  }
})();
