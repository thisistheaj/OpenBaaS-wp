(function () {
    'use strict';

    angular.module('app.service').factory('Service', Service);

    function Service($http) {
        //public
        var service = {
            getPosts: getPosts
        };

        var baseUrl = 'http://52.20.195.195/wordpress_wpbaas/?rest_route=/wp/v2/'
        function getPosts() {
            return $http.get(baseUrl + 'posts',function (response) {
                return response.data;
            })
        }

        function addPost(title,body) {
            return $http({method: 'POST',url: baseUrl + 'posts',},function (response) {
                return response.data;
            })
        }

        return service;
    }

})();
