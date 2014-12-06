var app = angular.module('Application', ['ngResource']);
 
app.factory('UserFactory', function($resource){
    return $resource('pensum.json', {}, {'get': {method: 'GET', isArray: true}});
});
 
app.controller('MainCtrl', function($scope, UserFactory) {
    $scope.text = "";
    $scope.users = UserFactory.get(function(){

   $scope.asig = [];  

    for (i = 0; i <= 3; ++i){
   	 	$scope.asig.push($scope.users[i].Asignatura);
    }
});
  
});
