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
            });

        $urlRouterProvider.otherwise('/home')

    }

})();
