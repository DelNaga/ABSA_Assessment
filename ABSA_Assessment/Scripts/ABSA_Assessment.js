function parseDate(jsonDate) {
    return new Date(parseInt(jsonDate.replace('/Date(', '')));
}

var ABSA_Assessment = angular.module("ABSA_Assessment", []).controller("ClientController", ['$http', function ($http) {
    var $ctrl = this;
    $http.get('/Home/GetClient')
        .then(function (response) {
            $ctrl.client = response.data;
            $ctrl.client.DateOfBirth = new Date(parseDate($ctrl.client.DateOfBirth));
        })
        .catch(function (errorResponse) {
            alert("Could not fetch client data from database.")
        });

    $http.get('/Home/GetIdentificationTypes')
        .then(function (response) {
            $ctrl.identifications = response.data;
        })
        .catch(function (errorResponse) {
            alert("Could not fetch identification data from database.")
        });
}]);

/*ABSA_Assessment.controller("ClientController", ClientController).factory("ClientService", function($http){
    var clientFactory = new Object();
    clientFactory.GetClient = function () {
        return $http.get("/Home/GetClient")
    }
});*/

/*var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/Home', {
            templateUrl: 'Home/Index'
        });
}
configFunction.$inject = ['$routeProvider'];

ABSA_Assessment.config(configFunction);*/