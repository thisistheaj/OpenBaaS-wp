(function () {
    'use strict';

    angular.module('app.controllers').controller('HomeCtrl', ['$scope','Service', HomeCtrl]);

    function HomeCtrl($scope,Service) {
        // $scope.createPost = createPost;
        Service.getPosts().then(function (response) {
            $scope.data = response.data;
        });

        // function createPost() {
            Service.addPost("bartitle").then(function (res) {
                console.log('success');
                console.log(res);
            },function (err) {
                console.log(err);
            })
        // }
    }

})();

