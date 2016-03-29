(function() {
    'use strict';

    angular
    .module('slack4Health')
    .controller('ChatController', ChatController);

    /** @ngInject */
    function ChatController($rootScope, $scope, $state) {

        $scope.goToBio = function() {
            $state.go("bio");
        }

        $scope.goToRooms = function() {
            $state.go("rooms");
        }

        $scope.channels = [
            {
                contact: "General",
                last_message_date: "10h20 10/06",
                last_message : "Ceci est un message de test",
                picture: "assets/images/avatar-min.png"
            },
            {
                contact: "Infirmière Alice Unnom",
                last_message_date: "7h23 20/11",
                last_message : "Ceci est un message de test un peu plus long pour voir le retour",
                picture: "assets/images/angular.png"
            },
            {
                contact: "Psychatre GentilMedecin",
                last_message_date: "22h47 17/03",
                last_message : "Ceci est un message de test",
                picture: "assets/images/karma.png"
            },
            {
                contact: "Médecin Général",
                last_message_date: "00h13 30/12",
                last_message : "Ceci est un message de test",
                picture: "assets/images/yeoman.png"
            }
        ];
    }
})();
