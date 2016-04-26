(function() {
  'use strict';

  angular
    .module('slack4Health')
    .controller('BioController', BioController);

  /** @ngInject */
  function BioController($rootScope, $scope, $state, $location, $anchorScroll, $timeout, $mdDialog) {

    $scope.messagePost = "";
    $scope.messaged = false;

    $scope.goToChat = function() {
        $state.go("chat");
    }

    $scope.goToPrescription = function() {
        $state.transition("prescription");
    }

    $scope.keyPressed = function($event) {
      var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
          $scope.sendMessage();
        }
    }

    $scope.sendMessage = function() {
      if ($scope.messagePost == "/dernier_resultat" || $scope.messagePost == "/dernier resultat" || $scope.messagePost == "/last_result") {
        $timeout(function() {
          $scope.messaged = true;
        }, 1000);
        $location.hash("bottom");
        $anchorScroll();
      }
    }

    $scope.showPdf = function (ev, path) {
      $scope.pdfUrl = path;
      $mdDialog.show({
        controller: function ($scope, pdfDelegate, $mdDialog) {
          $scope.cancel = function() {
            $mdDialog.cancel();
          };
          $scope.pdfHandle = pdfDelegate.$getByHandle('pdfView');
        },
        scope: $scope.$new(),
        templateUrl: "app/chat/pdfDialog.tmpl.html",
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: true
      });
    };

    $location.hash("bottom");
    $anchorScroll();
  }
})();
