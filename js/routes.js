(function () {
    'use strict';

    angular.module('app').config(config);

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                name: 'home',
                url: '/home',
                templateUrl: 'templates/home/home.html',
                controller: 'HomeCtrl'
            })
            .state('admin', {
                name: 'admin',
                url: '/admin',
                templateUrl: 'templates/home/admin.html',
                controller: 'AdminCtrl'
            });

        $urlRouterProvider.otherwise('/admin')

    }

})();
