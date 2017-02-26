(function () {
    'use strict';

    angular.module('app.controllers').controller('HomeCtrl', ['$scope','Service', HomeCtrl]);

    function HomeCtrl($scope,Service) {
        Service.get().then(function (response) {
            $scope.data = response.data;
        })
    }

})();

