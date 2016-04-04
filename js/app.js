var waitStaffApp = angular.module('waitstaff', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'home.html',
		controller: 'HomeCtrl'
	}).when('/newMeal', {
		templateUrl: 'newMeal.html',
		controller: 'NewMealCtrl'
	}).when('/myEarnings', {
		templateUrl: 'myEarnings.html',
		controller: 'MyEarningsCtrl'
	});
}])
.run(function($rootScope) {
    $rootScope.total = 0;
    $rootScope.subtotal = 0;
    $rootScope.tip = 0;
    $rootScope.tipTotal = 0;
    $rootScope.mealCount = 0;
    $rootScope.avgTipPerMeal = 0;
})
waitStaffApp.controller('NewMealCtrl', ['$scope', '$rootScope', function($scope, $rootScope){

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
	};

	$scope.init = function() {
		$scope.resetDetails();
		$scope.initCharges();
	};

	 $scope.init();
	
	$rootScope.submitDetails = function() {
		$scope.customerCharges();
		$rootScope.tipTotal += $scope.tip;
		$rootScope.mealCount++;
		$rootScope.avgTipPerMeal = $scope.tipTotal/$scope.mealCount;
	};

	$scope.customerCharges = function() {
		$scope.subtotal = $scope.mealPrice * (1 + $scope.taxRate/100);
		$scope.tip = $scope.mealPrice * ($scope.tipPercentage/100);
		$scope.total = $scope.subtotal + $scope.tip;
	};



}]).controller('MyEarningsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){

	$scope.initEarnings = function() {
		$rootScope.tipTotal = 0;
		$rootScope.mealCount = 0;
		$rootScope.avgTipPerMeal = 0;
	};

	$scope.resetEarnings = function() {
		$rootScope.tipTotal = 0;
		$rootScope.mealCount = 0;
		$rootScope.avgTipPerMeal = 0;
	}


}]).controller('HomeCtrl', ['$scope', function($scope) {

}]);
