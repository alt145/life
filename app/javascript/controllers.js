'use strict';

// Controllers

function ToDoCtrl($scope, $http) {
	$http.get('data/tasks').success(function(data) {
		$scope.tasks = data;
	});

	$scope.orderProp = 'age';

}