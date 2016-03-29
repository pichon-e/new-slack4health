(function() {
  'use strict';

  angular
    .module('slack4Health')
    .controller('FolderController', ['$scope', 'pdfDelegate', '$state', '$mdDialog', FolderController]);

  /** @ngInject */
  function FolderController($scope, pdfDelegate, $state, $mdDialog)  {

/*    $scope.goToPrescription = function() {
        $state.go("prescription");
    }*/

$scope.pdfUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149125/relativity.pdf';

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

    $scope.openFolder = function() {
        $mdDialog.show({
            templateUrl: "app/components/dialogs/file-dialog.tmpl.html",
            local: {
                pdfUrl: $scope.pdfUrl
            }
        });

    }
  }
})();
