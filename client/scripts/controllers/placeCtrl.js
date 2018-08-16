(function() {
'use strict'; 
angular
  .module("app")
  .controller('placeController', ['dataServicePlaces', '$routeParams', function(dataServicePlaces, $routeParams){
    // define view model
    var vm = this;
    vm.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHvgjfq-Li8rcWIb7U4o_YDB8kI_bHxWU";
    // define ID of place from routeparams
    vm.ID = $routeParams.id;
    // get all places
    dataServicePlaces.getAll(function(response) {
      vm.getAllPlaces = response.data;
      console.log(response)
    });
    // new place object
    vm.newPlace = {};
    // add a place
    vm.addPlace = function() {
      
        dataServicePlaces.addPlace(vm.newPlace, function(response) {
          vm.success = "Place Successfully Added!";
          vm.failure = false;
        }, function(error) {
          vm.success = false;
          vm.failure = true;
          vm.errorMessages = error.data.errors
        });
      };
      // update place
      vm.updatePlace = function() {
        console.log('update fired');
        dataServicePlaces.putID(vm.ID, vm.placeDetails, function(response) {
          console.log(response);
          vm.success = "Place Successfully Updated!";
          vm.failure = false;
        }, function(error) {
          vm.success = false;
          vm.failure = true;
          vm.errorMessages = error.data.errors
          console.log(error);
            });
          };
      // get place details based upon ID
      vm.getID = function() {
        dataServicePlaces.getID(vm.ID, function(response) {
          vm.placeDetails = response.data[0];
        });
      };


      vm.getID();

}]);
})();
