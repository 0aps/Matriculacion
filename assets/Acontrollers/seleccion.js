app.factory('AsignaturasFactory', function($resource){
   
    return $resource('pensum.json', {}, {'get': {method: 'GET', isArray: true}});
});


app.controller('SeleccionCtrl', function ($scope, UserService, AsignaturasFactory) {

	$scope.Cuatri = 1;
    $scope.cuatrimestres = AsignaturasFactory.get(function(){

   $scope.asig = [];  
    for (i = 0; i < 3; ++i){
   	 	$scope.asig.push($scope.cuatrimestres[i].Asignatura);
    }
});

    //debugger;

    $scope.contacts = UserService.list();
    $scope.saveContact = function () {
    	
        UserService.save($scope.newcontact);
        $scope.newcontact = {};
    }


    $scope.delete = function (id) {

        UserService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }


    $scope.edit = function (id) {

        $scope.newcontact = angular.copy(UserService.get(id));
    }
    
    $scope.addToList = function (asignatura) {

    	//var newobj = angular.copy(asignatura); 
    	
    	UserService.save(asignatura);   
    }

});