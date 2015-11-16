window.$ = window.jQuery = require('jquery');
require('angular');
require('angular-route');
var Hammer = require('hammerjs');
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
	setTimeout(function() {
		$(".button-collapse").sideNav('hide');
	}, 100);
});

setTimeout(function() {
	$('.splash').addClass('hidden');
	setTimeout(function() {
		$('.splash').remove();
	}, 400);

	$('#the-button').on('touchstart', function() {
		$(this).addClass('active');
	})
	.on('touchend', function() {
		$(this).removeClass('active');
	});

}, 2000);

//todo - only listen when scope has changed such that config.hardMode === true
window.addEventListener('deviceorientation', function(e) {
	var button = document.querySelector('.hard #the-button');

	if (button) {
		var x = e.beta;
		var y = e.gamma;

		var orientationClass = '';

		//be a jerk
		if (x >= 50 && x < 60 && y >= 0 && y < 3) {
			orientationClass = 'visible';
		}

		button.className = orientationClass;
	}
	
});

