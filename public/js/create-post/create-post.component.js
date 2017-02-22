(function() {
  'use strict';
  console.log("CREATE-POST");

  angular.module('app')
    .component('createPost', {
      controller: controller,
      templateUrl: "/js/create-post/create-post.template.html"
    });

  controller.$inject = ['$http', '$state']

  function controller($http, $state) {
    const vm = this;
    vm.newPost = newPost;


    function newPost() {
      // console.log('I am running, as well');
      $http.post('/classifieds', vm.post)
        .then(function(response) {
          delete vm.post;
          $state.go('showPost')
        });
    }
  }



}())
