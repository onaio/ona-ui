'use strict';

angular.module('onaUiApp', ['OnaConfig', 'slugifier'])
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
            .when('/organizations/new', {
                templateUrl:'views/organizations/new.html',
                controller:'OrganizationsNewCtrl'
            })
            .when('/organizations/:org', {
                templateUrl:'views/organizations/show.html',
                controller:'OrganizationsShowCtrl'
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
    .directive('iCheck', function($timeout, $parse) {
        return {
            link: function($scope, element, $attrs) {
                return $timeout(function() {
                    var ngModelGetter, value;
                    ngModelGetter = $parse($attrs['ngModel']);
                    value = $parse($attrs['ngValue'])($scope);
                    return $(element).iCheck({
                        checkboxClass: 'icheckbox_square-grey',
                        radioClass: 'iradio_square-grey',
                        increaseArea: '20%'
                    }).on('ifChanged', function(event) {
                            if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
                                $scope.$apply(function() {
                                    return ngModelGetter.assign($scope, event.target.checked);
                                });
                            }
                            if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
                                return $scope.$apply(function() {
                                    return ngModelGetter.assign($scope, value);
                                });
                            }
                        });
                });
            }
        };
    });