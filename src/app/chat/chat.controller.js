(function() {
    'use strict';

    angular
    .module('slack4Health')
    .controller('ChatController', ChatController);

    /** @ngInject */
    function ChatController($scope, $mdDialog, $filter, $localStorage, $mdSidenav, $timeout, $mdToast, $state) {

        $scope.$storage = $localStorage;
        if (!$scope.$storage.messages) {
            $scope.$storage.messages = [];
        }

        if (!$scope.$storage.newDoc) {
          $scope.$storage.newDoc = false;
        }

        $scope.messagePost = null;

        $scope.currentChannel = null;

        $scope.goToBio = function() {
            $state.go("bio");
        }

        $scope.goToRooms = function() {
            $state.go("rooms");
        }

        $scope.selectChannel = function($channel) {
            $scope.currentChannel = $channel;
            console.log("channel : ", $scope.currentChannel);
        }

        $scope.resetChannel = function() {
            $scope.currentChannel = null;
        }

        $scope.channels = [
            {
                contact: "General",
                last_message_date: "10h20 26/04",
                last_message : "La patiente a reçu son traitement",
                picture: "assets/images/general.jpg"
            },
            {
                contact: "Nathalie DUPOND (Infirmiere)",
                last_message_date: "11h23 23/04",
                last_message : "La TA du patient est à 18/12.",
                picture: "assets/images/Infirmiere.jpg"
            },
            {
                contact: "Sylvain Courlis (Psychatre)",
                last_message_date: "22h47 17/03",
                last_message : "Merci pour votre réponse",
                picture: "assets/images/psychiatre.jpg"
            },
            {
                contact: "Michel Lantier (Médecin de service)",
                last_message_date: "00h13 30/12",
                last_message : "",
                picture: "assets/images/generaliste.jpg"
            }
        ];

/*    $scope.showTabDialog = function(ev) {

      $scope.doctors = [
        {
          specialization: "Généraliste",
          firstName: "Michel",
          lastName: "Lantier",
          photo: "img/michelLantier.jpg"
        },
        {
          specialization: "Dermatologue",
          firstName: "Martine",
          lastName: "Paellaso",
          photo: "img/martinePaellaso.jpg"
        },
        {
          specialization: "Ophtalmologue",
          firstName: "Sylvain",
          lastName: "Courlis",
          photo: "img/sylvainCourlis.jpg"
        },
        {
          specialization: "Kinésithérapeute",
          firstName: "Oskar",
          lastName: "Euskarien",
          photo: "img/oskarEuskarien.jpg"
        }
      ];

    }
    var avatarDr = '../assets/images/sample-avatar.jpg';
    var avatarNurse = '../assets/images/sample-avatar2.png';

    $scope.test = false;*/

    $scope.messages = [
      {
        date: '18/03/2016 : 08h02',
        job: 'Infirmier(e)',
        name: 'Nathalie DUPOND',
        content: 'RAS.',
        me: true
      },
      {
        date: '18/03/2016 : 08h34',
        job: 'Médecin',
        name: 'Frédéric HOUSE',
        content: 'Quelle est la TA du patient ?',
        me:false
      },
      {
        date: '18/03/2016 : 08h42',
        job: 'Infirmier(e)',
        name: 'Nathalie DUPOND',
        content: 'La TA du patient est à <strong>18/12</strong>.',
        me:true
      }
    ];


    $scope.newDocMessage = [];

    $scope.newDocMessage = $scope.newDocMessage.concat($scope.$storage.messages);

    $scope.sendMessage = function($message) {
      console.log("boum");
      // ChatService.sendMessage(1, $scope.messagePost);
      console.log("test un deux : ", $scope.messagePost);
      var newMessage = {
        date: $filter('date')(new Date(), "dd/MM/yyyy : HH'h'mm"),
        job: 'Médecin',
        name: 'Frederic House',
        content: $message,
        me:false
      };
      var newResponse = {
        date: $filter('date')(new Date(), "dd/MM/yyyy : HH'h'mm"),
        job: 'Médecin généraliste',
        name: 'Michel Lantier',
        content: 'app/chat/ordonnance.pdf',
        me:true
      };
      $scope.newDocMessage.push(newMessage);
      $scope.$storage.messages.push(newMessage);
/*      $scope.messagePost = "";*/
      $timeout(function() {
        $scope.newDocMessage.push(newResponse);
        $scope.$storage.messages.push(newResponse);
        $scope.$apply();
      }, 5000);
    };

    $scope.keyPressed = function($event, $message) {
      var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
          $scope.sendMessage($message);
        }
    }


  // PDF reader

    $scope.showPdf = function (ev, path) {
      $scope.pdfUrl = path;
      if ($scope.pdfUrl === 'app/chat/ordonnance.pdf') {
        $timeout(function() {
          $mdToast.show(
           $mdToast.simple()
             .content('Une nouvelle biologie est arrivée !')
             .position('top right')
             .hideDelay(3000)
           );
        }, 4000)
      }
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
    }
})();
