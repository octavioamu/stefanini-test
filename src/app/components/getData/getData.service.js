(function() {

'use strict'
angular
  .module('stefaniniTest')
  .factory('getData', function ($http) {
    function get (source) {
      return $http({
        method: 'GET',
        url: source
      })
    }
    return {
      get : get
    }
  })

})();
