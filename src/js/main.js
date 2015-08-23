window.$ = window.jQuery = require('jquery');
require('angular');
require('angular-route');
require('hammerjs');
require('./lib/vendor/jquery.hammer.js/jquery.hammer');
require('./lib/vendor/materialize/js/velocity.min');
require('./lib/vendor/materialize/js/sideNav');

var buttonApp = angular.module('buttonApp', ['ngRoute']);

buttonApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'partials/index.html'
			}).
			when('/about', {
				templateUrl: 'partials/about.html'
			}).
			when('/settings', {
				templateUrl: 'partials/settings.html'
			}).
			otherwise({
				redirectTo: '/'
			});
}]).run(function($rootScope) {
	$rootScope.config = {
		showButton: true
	};
});

$(".button-collapse").sideNav();

$(document).on('click', '.side-nav a', function() {
	$(".button-collapse").sideNav('hide');
});

setTimeout(function() {
	$('.splash').addClass('hidden');
	setTimeout(function() {
		$('.splash').remove();
	}, 400);
}, 2000);

