'use strict';

describe('Controller: OrganizationsNewCtrl', function () {

    // load the controller's module
    beforeEach(module('onaUiApp'));

    var $httpBackend, Ctrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $injector) {
        $httpBackend = $injector.get('$httpBackend');
        scope = $rootScope.$new();
        Ctrl = $controller('OrganizationsNewCtrl', {
            $scope: scope,
            ONA_HOST: 'http://example.com'
        });
    }));

    /*afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });*/

    it('should post to org create url on submit', function () {
        scope.org_create_form = {
            $valid: true
        };

        var post_data = {
            org: 'my-org',
            name: 'My Org',
            city: 'Nairobi',
            country: 'KE',
            require_auth: true
        };

        scope.org = post_data;
        $httpBackend.expectPOST('http://example.com/api/v1/orgs', post_data).respond(201, '');
        scope.submit();
        $httpBackend.flush();

        expect(scope.success).toEqual(true);
    });
});
