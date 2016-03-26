(function() {
  'use strict';

  angular
    .module('slack4Health')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
