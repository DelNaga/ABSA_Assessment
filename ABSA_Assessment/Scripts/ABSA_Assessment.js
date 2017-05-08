var ABSA_Assessment = angular.module("ABSA_Assessment", ['ngRoute']);

ABSA_Assessment.controller("ClientController", ClientController).factory("ClientService", function($http){

});  

var configFunction = function ($routeProvider) {
    $routeProvider.
        when('/Home', {
            templateUrl: 'Home/Index'
        });
}
configFunction.$inject = ['$routeProvider'];

ABSA_Assessment.config(configFunction);