	var validationApp = angular.module('app', []);
		// create angular controller
	validationApp.controller('mainController', function($scope) {
		// debugger;
			// function to submit the form after all validation has occurred			
		$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.signUpForm.$valid) {
				alert('Thanks For register with Us!.');
			}

		};
	});