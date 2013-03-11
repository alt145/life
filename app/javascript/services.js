'use strict';

/* Services */

angular.module('lifeServices', ['ngResource']).
	factory('Tasks', function($resource){
		return $resource('data/todo.json', {}, {
			query: {method:'GET', isArray:true}
		});
	});