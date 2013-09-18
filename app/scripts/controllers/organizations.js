'use strict';

angular.module('onaUiApp')
    .controller('OrganizationsCtrl', function ($scope) {
        var i = 0;
        var max = 10;
        var orgs = [];
        while(i < max)
        {
            orgs.push({
                name: 'Org ' + i,
                city: 'Country ' + i,
                country: 'Country ' + i,
                require_auth: (i % 2 == 0)
            })
            i++;
        }
        $scope.orgs = orgs;
    });
