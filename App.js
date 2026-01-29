// app.js
var app = angular.module('eliteApp', []);

app.controller('ResidentController', function($scope, $http) {
  $http.get('residents.json').then(function(response) {
    $scope.residents = response.data.map(function(r) {
      r.showDetails = false;
      r.isHovered = false;
      return r;
    });
  });

  $scope.toggleDetails = function(resident) {
    resident.showDetails = !resident.showDetails;
  };

  $scope.hoverIn = function(resident) {
    resident.isHovered = true;
  };
  $scope.hoverOut = function(resident) {
    resident.isHovered = false;
  };

  $scope.onFocus = function() { console.log('Focused'); };
  $scope.onBlur = function() { console.log('Blurred'); };
});
