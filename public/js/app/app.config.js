(function() {
  'use strict'

  console.log("CONFIG");

  angular.module('app')
    .config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'app',
        abstract: true,
        component: 'app',
      })
      .state({
        name: 'showPost',
        parent: 'app',
        url: '/',
        component: 'showPost',
      })
      .state({
        name: 'createPost',
        parent: 'app',
        url: '/create-post',
        component: 'createPost',
      })
      .state({
        name: 'editPost',
        parent: 'app',
        url: '/edit-post/:editId',
        component: 'editPost',
      });
  }
}());
