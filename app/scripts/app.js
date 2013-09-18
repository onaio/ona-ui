'use strict';

angular.module('onaUiApp', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl:'views/dashboard.html',
                controller:'DashboardCtrl'
            })
            .when('/organizations', {
                templateUrl:'views/organizations.html',
                controller:'OrganizationsCtrl'
            })
            .otherwise({
                redirectTo:'/'
            });
    })
    .run(function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (evt, current, previous) {
            if (current.$$route && current.$$route.controller)
                $rootScope.controller = current.$$route.controller;
        })
    })
    .constant('ONA_URL', 'http://localhost:8000');
