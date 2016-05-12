(function() {
  'use strict';

  angular.module('app', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
       .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController',
        resolve: {
          currentUser: function ($http) {

            // if the browser has a token
            if (localStorage.getItem('token')) {

              // call /me endpoint, and pass it the token
              const config = {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
              }

              return $http.get('/api/v1/users/me', config)
                .then(function (response) {
                  return response.data
                })
                .catch(function () {
                  localStorage.clear();
                  return null;
                })

            }
          }
        }
      })
      .when('/signup', {
        templateUrl: '/templates/signup.html',
        controller: 'SignupController'
      });

      $locationProvider.html5Mode(true);
    });

}());
