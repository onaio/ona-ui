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
    .controller('OrganizationsNewCtrl', function($scope, $http, ONA_HOST, Slug){
        $scope.org = {};

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
            $http.post(orgs_url, data, {})
                .success(function(){
                    $scope.success = true;
                })
                .error(function(){
                    $scope.success = false;
                });
        };
    })
    .controller('OrganizationsShowCtrl', function($scope){

    });
