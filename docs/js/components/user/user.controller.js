(function() {

  'use strict';

  angular
  .module('myApp.components.user', [])
  .controller('userController', userController);

  userController.$inject = ['UserService'];

  function userController(UserService) {
    /*jshint validthis: true */
    const vm = this;
    vm.test = 'Hello World';
    vm.user = {};
    vm.newUser = {};

    vm.onSubmit = function() {
      UserService.login(vm.user)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
      vm.user = {};
    };

    vm.register = function() {
      UserService.register(vm.newUser)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
      vm.newUser = {};
    };
  }

})();
