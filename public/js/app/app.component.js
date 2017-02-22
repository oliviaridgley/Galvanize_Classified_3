(function() {
  'use strict';
  console.log("APP COMPONENT");
  angular.module('app')
    .component('app', {
      controller: controller,
      templateUrl: "/js/app/app.template.html"
    });

  function controller() {
    const vm = this;


    vm.$onInit = function() {

    };


  }

}());
