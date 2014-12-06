app.controller('RegistroCtrl', function($scope, $location) {
	
	$scope.apellido = "",
	$scope.apellido2 = "",
	$scope.cedula = "";

	function hasNum(arg){
		if(arg === undefined) return false;
		for(i = 0; i < arg.length; ++i){
			if(arg[i] >= '1' && arg[i] <= '9')
				return true;
		}
		return false;
	}

	function validateCed(arg){

		var sum = 0;

        for (var j = 0; j < 10; ++j) {
                var digit = arg[j] - '0';
               
                if (j & 1) {
                        digit *= 2;
                       
                        if (digit >= 10) {
                                ++sum;
                        }
                        sum += digit % 10;
                }
                else {
                        sum += digit;
                }
        }
       
        if (sum < 10) {
        	debugger;
               if(sum === parseInt(arg[arg.length-1]) )
               		return false;
               	return true;
        }
        for (var x = 0; ; x += 10) {
                if (sum - x < 10) {
                     var tmp = 10 - (sum - x);
                     if(tmp === parseInt(arg[arg.length-1]) )
               			return false;

               		return true;    
                }
        }
	}

	$scope.validateCedula = function(){
		if($scope.cedula=== undefined) return false;
		if( $scope.cedula !== "" &&  ( $scope.cedula.length !== 11 ||
					validateCed($scope.cedula) ) )
					return true;

				return false;
	}

	$scope.validateApellido = function(){
		if( ($scope.apellido !== "" || $scope.apellido2 !== "" ) && ( ($scope.apellido === $scope.apellido2) ||
			hasNum($scope.apellido) || hasNum($scope.apellido2)  ) )
			return true;

		return false;
	}


});