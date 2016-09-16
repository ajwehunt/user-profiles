angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $state ) {

	$scope.login = function( user ) {
		friendService.login(user).then(function( response ) {
			if (response.data.userFound) {
				$state.go('profile');
			} else {
				alert('user not found');
			}
		});
	}

});
