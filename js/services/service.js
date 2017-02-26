(function () {
    'use strict';

    angular.module('app.service').factory('Service', Service);

    function Service($http) {
        //public
        var service = {
            get: get
        };

        function get() {
            return $http.get('http://52.20.195.195/wordpress_wpbaas/?rest_route=/wp/v2/posts',function (response) {
                return response;
            })
        }

        return service;
    }

})();
