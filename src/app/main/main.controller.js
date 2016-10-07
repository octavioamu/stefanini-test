(function() {
  'use strict';

  angular
    .module('stefaniniTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(getData, $log) {
    var vm = this;
    // get menu items
    getData.get('data/menu.json').then(function (data) {
      vm.menu = data.data
    }, function (err) {
        $log.error('Cant find data', err);
    })

     // get section data
    getData.get('data/sections.json').then(function (data) {
      vm.sections = data.data
    }, function (err) {
        $log.error('Cant find data', err);
    })
    // get footer data
    getData.get('data/footer.json').then(function (data) {
      vm.footer = data.data
    }, function (err) {
        $log.error('Cant find data', err);
    })

  }
})();
