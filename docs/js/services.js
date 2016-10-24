(function() {

  'use strict';

  angular
  .module('myApp.services', [])
  .service('CoffeeService', CoffeeService);

  CoffeeService.$inject = ['$http'];

  function CoffeeService($http) {
    /*jshint validthis: true */
    const baseURL = 'https://tranquil-badlands-94076.herokuapp.com/coffee';
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

})();
