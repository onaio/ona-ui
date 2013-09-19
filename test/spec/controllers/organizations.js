'use strict';

describe('Controller: OrganizationsNewCtrl', function () {

    // load the controller's module
    beforeEach(module('onaUiApp'));

    var $httpBackend, Ctrl, scope, navigation;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $injector, Navigation) {
        $httpBackend = $injector.get('$httpBackend');
        scope = $rootScope.$new();
        navigation = Navigation;
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
        var response_data = {
            address: "",
            city: "Nairobi",
            country: "KE",
            creator: "http://localhost:8000/api/v1/users/larryweya",
            description: "",
            home_page: "",
            name: "My Org",
            org: "my-org",
            phonenumber: "",
            require_auth: false,
            twitter: "",
            url: "http://localhost:8000/api/v1/orgs/my-organisation",
            user: "http://localhost:8000/api/v1/users/my-organisation"
        };

        scope.org = post_data;
        $httpBackend.expectPOST('http://example.com/api/v1/orgs', post_data).respond(201, response_data);
        spyOn(navigation, 'redirect');
        scope.submit();
        $httpBackend.flush();
        expect(navigation.redirect).toHaveBeenCalledWith(scope, '#/organizations/my-org');
    });
});
