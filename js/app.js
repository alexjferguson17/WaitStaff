var waitStaffApp = angular.module('waitstaff', []);
waitStaffApp.controller('waitStaffController', ['$scope', function($scope){

	$scope.resetDetails = function(){
		$scope.mealPrice = '';
		$scope.taxRate = '';
		$scope.tipPercentage = '';
	};

	$scope.initCharges = function(){
		$scope.subtotal = 0;
		$scope.taxRate = 0;
		$scope.tipPercentage = 0;
		$scope.tip = 0;
		$scope.total = 0;
	};

	$scope.initEarnings = function() {
		$scope.tipTotal = 0;
		$scope.mealCount = 0;
		$scope.avgTipPerMeal = 0;
	};

	$scope.init = function() {
		$scope.resetDetails();
		$scope.initCharges();
		$scope.initEarnings();
	};

	$scope.init();

	$scope.submitDetails = function() {
		$scope.customerCharges();
		$scope.tipTotal += $scope.tip;
		$scope.mealCount++;
		$scope.avgTipPerMeal = $scope.tipTotal/$scope.mealCount;
	};

	$scope.customerCharges = function() {
		$scope.subtotal = $scope.mealPrice * (1 + $scope.taxRate/100);
		$scope.tip = $scope.mealPrice * ($scope.tipPercentage/100);
		$scope.total = $scope.subtotal + $scope.tip;
	};



}]);
