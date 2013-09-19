'use strict';

angular.module('onaUiApp')
    .controller('OrganizationsCtrl', function ($scope, $http, ONA_HOST) {
        var orgs = [];
        var orgs_url = ONA_HOST + '/api/v1/orgs';
        $http.get(orgs_url, {
            withCredentials: true
        })
            .success(function(response){
                $scope.orgs = response;
            })
            .error(function(){
                alert("An error occurred!")
            });
        $scope.orgs = orgs;
    })
    .controller('OrganizationsNewCtrl', function($scope, $http, Navigation, ONA_HOST, Slug){
        $scope.org = {};
        $scope.show_alert = false;

        $scope.hideAlert = function(){
            $scope.show_alert = false;
        };

        $scope.setSlug = function(){
            if($scope.org_create_form.org_id.$pristine)
                $scope.org.org = Slug.slugify($scope.org.name);
        };

        $scope.submit = function(){
            if($scope.org_create_form.$valid)
            {
                makeRequest($scope.org);
            }
        };

        var makeRequest = function(data){
            var orgs_url = ONA_HOST + '/api/v1/orgs';
            $http.post(orgs_url, data, {withCredentials: true})
                .success(function(data){
                    Navigation.redirect($scope, '#/organizations/' + data.org);
                })
                .error(function(data, status_code){
                    $scope.show_alert = true;
                });
        };
    })
    .controller('OrganizationsShowCtrl', function($scope){

    });
