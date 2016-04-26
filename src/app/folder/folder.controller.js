(function() {
  'use strict';

  angular
    .module('slack4Health')
    .controller('FolderController', FolderController);

  /** @ngInject */
  function FolderController($scope, pdfDelegate, $state, $mdDialog, $location, $anchorScroll)  {

/*    $scope.goToPrescription = function() {
        $state.go("prescription");
    }*/

$scope.pdfUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149125/relativity.pdf';

    $scope.dataset = [
        {
            picture: "analyse.jpg",
            title: "Analyse"
        },
        {
            picture: "radio.jpg",
            title: "Radio"
        },
        {
            picture: "biopsie.jpg",
            title: "Biopsie"
        },
        {
            picture: "irm.jpg",
            title: "IRM"
        }
    ]

    $location.hash("bottom");
    $anchorScroll();

    $scope.openFolder = function() {
        $mdDialog.show({
            templateUrl: "app/components/dialogs/file-dialog.tmpl.html",
            local: {
                pdfUrl: $scope.pdfUrl
            }
        });

    }

    $location.hash("bottom");
    $anchorScroll();
  }
})();
