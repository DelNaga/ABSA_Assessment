//Converting json dates to a JS date
function parseDate(jsonDate) {
    return new Date(parseInt(jsonDate.replace('/Date(', '')));
}
//Setup the ABSA assessment
var ABSA_Assessment = angular.module("ABSA_Assessment", []).controller("ClientController", ['$http', function ($http) {
    var $ctrl = this;

    //Setup the post function
    $ctrl.postClient = postClient;

    //Grab the client data fresh on load of the APP
    $http.get('/Home/GetClient')
        .then(function (response) {
            $ctrl.client = response.data;
            $ctrl.client.DateOfBirth = new Date(parseDate($ctrl.client.DateOfBirth));
            console.dir($ctrl.client.IdentificationId)
        })
        .catch(function (errorResponse) {
            alert("Could not fetch client data from database.")
        });

    //grab the ID types for form dynamics
    $http.get('/Home/GetIdentificationTypes')
        .then(function (response) {
            $ctrl.identifications = response.data;
        })
        .catch(function (errorResponse) {
            alert("Could not fetch identification data from database.")
        });

    function postClient() {
        //Old way of grabbing the identification id from the form object
        //$ctrl.client.IdentificationId = $ctrl.client.IdentificationId.IdentificationId;
        console.dir($ctrl.client);
        $http.post('/Home/SetClient', $ctrl.client).then(function () {
            alert("Client saved successfully");
        }).catch(function (errorResponse) {
            alert("Could not save client to database.")
        });
    }
}]);
//Old deprecated code
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