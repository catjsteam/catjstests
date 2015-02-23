/*global angular */

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('todomvc', ['ngRoute'])
    .config(function ($routeProvider) {
		'use strict';
        
		$routeProvider.when('/', {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html'
		}).when('/:status', {
			controller: 'TodoCtrl',
			templateUrl: 'todomvc-index.html'
		}).otherwise({
			redirectTo: '/'
		});

        /*
         @[scrap
            @@name InitialTest
             @@log "Angular application module initialized"
             @@description Insert an item to the Todo list                            
         ]@
        */

    });
