(function() {

  'use strict';

  angular
  .module('myApp.services', [])
  .service('CoffeeService', CoffeeService)
  .service('UserService', UserService);

  CoffeeService.$inject = ['$http'];

  function CoffeeService($http) {
    /*jshint validthis: true */
    const baseURL = 'https://neap-server.herokuapp.com/coffee';
    // const baseURL = 'http://localhost:8000/coffee';

    this.getAllCoffees = function() {
      return $http.get(baseURL);
    };

    this.addCoffee = function(coffee) {
      return $http({
        method: 'POST',
        url: baseURL,
        data: coffee,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

  function UserService($http) {

    this.test = 'service';
    const baseURL = 'https://neap-server.herokuapp.com/user'
    // const baseURL = 'http://localhost:8000/user';

    this.login = function(user) {
      return $http({
        method: 'POST',
        url: baseURL + '/login',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };

    this.register = function(user) {
      return $http({
        method: 'POST',
        url: baseURL + '/register',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

})();
