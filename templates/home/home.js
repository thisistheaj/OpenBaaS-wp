(function () {
    'use strict';

    angular.module('app.controllers')
        .controller('HomeCtrl', ['$scope', 'Service', HomeCtrl])
        .controller('AdminCtrl', ['$scope', 'Service', AdminCtrl]);

    function HomeCtrl($scope, Service) {
        $scope.createPost = createPost;
        $scope.post = {
            title: "",
            content: ""
        };

        loadPosts();

        function loadPosts() {
            Service.getPosts().then(function (response) {
                $scope.data = response.data;
                $scope.$apply();
            });
        }

        function createPost() {
            Service.addPost($scope.post.title, $scope.post.content).then(function (res) {
                console.log('success');
                console.log(res);
                loadPosts();
            }, function (err) {
                console.log(err);
            })
        }
    }

    function AdminCtrl($scope, Service) {
        $scope.createPost = createPost;
        $scope.post = {
            title: "",
            content: ""
        };


        function createPost() {
            Service.addPost($scope.post.title, $scope.post.content).then(function (res) {
                console.log('success');
                console.log(res);
                loadPosts();
            }, function (err) {
                console.log(err);
            })
        }
    }

})();

