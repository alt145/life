'use strict';

// Controllers

function ToDoCtrl($scope, $http) {
	$http.get('data/todo.json').success(function(data) {
		$scope.tasks = data;
	});

	$scope.orderProp = 'age';

}