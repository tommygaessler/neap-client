(function() {

  'use strict';

  angular
  .module('myApp.components.coffee', [])
  .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['$scope', 'CoffeeService'];

  function coffeeController($scope, CoffeeService) {
    /*jshint validthis: true */

    const vm = this;
    this.showForm = false;
    vm.coffeeObj = init();
    vm.showForm = function() {
      vm.form = true;
    };

    vm.addCoffee = function() {
      CoffeeService.addCoffee(vm.coffeeObj)
      .then(() => {
        CoffeeService.getAllCoffees()
        .then((coffees) => {
          vm.coffees = coffees.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
        vm.coffeeObj = init();
        vm.form = false;
      });
    };

    this.showForm = function() {
      this.form = true;
    };

    CoffeeService.getAllCoffees()
    .then((coffees) => {
      vm.coffees = coffees.data.data;
    })
    .catch((error) => {
      console.log(error);
    });

    function init() {
      const coffeeObj = {
        name: 'Christmas Blend',
        roaster: 'Sweet Bloom',
        origin: 'master',
        roast: 'Medium',
        caffeine: 2,
        decaf: 'false',
        price: 1234,
        quantity: 1
      };
      return coffeeObj;
    }
  }

})();
