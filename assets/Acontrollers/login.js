app.controller('LoginCtrl', function($scope, $location, authSvc) {
	if(auth.Svc.list() == 0)
		$location.path("/login");
	
});