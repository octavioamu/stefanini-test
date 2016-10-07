(function() {
  'use strict';

  angular
    .module('stefaniniTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
