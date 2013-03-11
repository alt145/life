'use strict';

/* App Module */

angular.module('life', []).
	config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/todo', {templateUrl: 'partials/todo.html', controller: ToDoCtrl}).
		otherwise({redirectTo: '/todo'});

	}]);