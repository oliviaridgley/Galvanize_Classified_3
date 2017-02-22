(function() {
  'use strict';
  console.log("EDIT-POST");

  angular.module('app')
    .component('editPost', {
      templateUrl: "/js/edit-post/edit-post.template.html",
      controller: controller
    });

  controller.$inject = ['$http', '$state', '$stateParams']

  function controller($http, $state, $stateParams) {
    const vm = this

    vm.$onInit = onInit;
    vm.updatePost = updatePost;
    console.log($stateParams.editId);

    function onInit() {
      $http.get(`/classifieds/${$stateParams.editId}`)
        .then(function(response) {
          console.log(response.data);
          vm.post = response.data;
          console.log(vm.post);
        });
    }

    function updatePost(post) {
      console.log(post);
      $http.patch(`/classifieds/${$stateParams.editId}`, vm.post)
        .then(function(response) {
          $state.go('showPost');
        });
    }



  }



}())
