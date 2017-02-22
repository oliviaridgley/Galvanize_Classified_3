(function() {
  'use strict';
  console.log("SHOW-POST");

  angular.module('app')
    .component('showPost', {
      controller: controller,
      templateUrl: "/js/show-post/show-post.template.html"
    });

  controller.$inject = ['$http'];

  function controller($http) {
    const vm = this;

    vm.$onInit = onInit;
    vm.posts = [];
    vm.remove = remove;

    function onInit() {
      // console.log('I am running, too');
      $http.get('/classifieds').then(function(response) {
        vm.posts = response.data;
      });
    }

    function remove(post) {
      console.log(post);
      var index = vm.posts.indexOf(post);
      console.log(index);
      vm.posts.splice(index, 1);
    }
  }



}())
