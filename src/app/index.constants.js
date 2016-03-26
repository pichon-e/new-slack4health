/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('slack4Health')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
