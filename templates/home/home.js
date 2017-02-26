(function () {
    'use strict';

    angular.module('app.controllers').controller('HomeCtrl', ['$scope','Service', HomeCtrl]);

    function HomeCtrl($scope,Service) {
        Service.getPosts().then(function (response) {
            $scope.data = response.data;
        })
    }

})();

