(function() {
'use strict';   
angular
  .module("app")
  .controller('spaceController', ['dataServiceSpace', '$routeParams', function(dataServiceSpace, $routeParams){
    // define view model
    var vm = this;
    vm.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyAHvgjfq-Li8rcWIb7U4o_YDB8kI_bHxWU";
    dataServiceSpace.getISS(function(response) {
      vm.locationISS = response.data;
      console.log(response);
    });
    // define ID of place from routeparams
    vm.getISS = function() {
        
        dataServiceSpace.getISS(function(response) {
          console.log(response.data);
          vm.locationISS = response.data;
        });
      };

}]);
})();
