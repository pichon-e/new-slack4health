(function() {
  'use strict';

  angular
    .module('slack4Health')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('rooms', {
        url: '/',
        templateUrl: 'app/rooms/rooms.tmpl.html',
        controller: 'RoomsController'
      })
      .state('chat', {
        url: '/chat',
        templateUrl: 'app/chat/chat.tmpl.html',
        controller: 'ChatController'
      })
      .state('bio', {
        url: '/bio',
        templateUrl: 'app/bio/bio.tmpl.html',
        controller: 'BioController'
      })
      .state('prescription', {
        url: '/prescription',
        templateUrl: 'app/prescription/prescription.tmpl.html',
        controller: 'PrescriptionController'
      })
      .state('folder', {
        url: '/folder',
        templateUrl: 'app/folder/folder.tmpl.html',
        controller: 'FolderController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
