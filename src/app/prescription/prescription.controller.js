(function() {
  'use strict';

  angular
    .module('slack4Health')
    .controller('PrescriptionController', PrescriptionController);

  /** @ngInject */
  function PrescriptionController($rootScope, $scope, $state, $mdDialog) {

    $scope.currentDate = moment();
    moment.locale('fr');
    console.log($scope.currentDate);

    $scope.prescriptions = [
      {
        "name": "Diamicron",
        "date": moment("2016-4-22"),
        "dosage": "30mg",
        "duration": 27,
        "forme": "comprimé",
        "posologie": "3-0-0"
      },
      {
        "name": "Januvia",
        "date": moment("2016-4-10"),
        "dosage": "100mg",
        "duration": 3,
        "forme": "comprimé",
        "posologie": "1-0-0"
      },
      {
        "name": "Metformine",
        "date": moment("2016-3-17"),
        "dosage": "1000mg",
        "duration": 40,
        "forme": "comprimé",
        "posologie": "1-1-1"
      }
    ]

    $scope.isCurrent = function($item) {
      var duration = $scope.currentDate.diff($item.date, 'days');
      return (duration - $item.duration);
    }

    $scope.addPrescription = function() {
      $mdDialog.show({
        templateUrl: 'app/prescription/add-prescription.tmpl.html',
        scope: $scope.$new()
      }).then(function(answer) {
        $scope.alert = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.alert = 'You cancelled the dialog.';
      });
    }

    $scope.close = function() {
      $mdDialog.hide();
    }

    $scope.goToBio = function() {
        $state.go("bio");
    }

    $scope.goToFolder = function() {
        $state.go("folder");
    }

    $scope.readonly = false;
    $scope.selectedItem = null;
    $scope.searchText = null;
    $scope.pharmaceuticals = loadPharmaceuticals();
    $scope.selectedDrug = [];
    $scope.autocompleteDemoRequireMatch = true;

    /**
     * Return the proper object when the append is called.
     */
    $scope.transformChip = function(chip) {
      console.log("test");
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return chip;
      }

      // Otherwise, create a new one
      return { name: chip, type: 'new' }
    }

    /**
     * Search for vegetables.
     */
    $scope.querySearch = function(query) {

      var results = query ? loadPharmaceuticals().filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(pharmaceuticals) {
        return (pharmaceuticals._lowername.indexOf(lowercaseQuery) === 0);
      };

    }

     function loadPharmaceuticals() {
      var pharmaceuticals = [
        {
          "name": "Diamicron",
          "dosage": "30mg",
          "forme": "comprimé",
          "posologie": "3-0-0"
        },
        {
          "name": "Januvia",
          "dosage": "100mg",
          "forme": "comprimé",
          "posologie": "1-0-0"
        },
        {
          "name": "Metformine",
          "dosage": "1000mg",
          "forme": "comprimé",
          "posologie": "1-1-1"
        },
        {
          "name": "Abrantosine",
          "dosage": "1000cm",
          "forme": "suppositoire",
          "posologie": "1-1-1"
        },
        {
          "name": "Triatec",
          "dosage": "2,5mg",
          "forme": "comprimé",
          "posologie": "1-0-0"
        },
        {
          "name": "Bactrim Forte",
          "dosage": "N/A",
          "forme": "comprimé",
          "posologie": "2-0-2"
        }
      ];

      return pharmaceuticals.map(function (pharm) {
        pharm._lowername = pharm.name.toLowerCase();
        return pharm;
      });
    }

    $scope.addPharmaceuticals = function(items , days) {
      angular.forEach(items, function(item) {
        item.duration = days;
        item.date = $scope.currentDate;
        $scope.prescriptions.push(item);
      });
      $mdDialog.hide();
      $scope.selectedDrug = [];
    }
  }
})();
