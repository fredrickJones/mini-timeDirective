'use strict';
var app = angular.module('freeTime');

app.directive('showTime', function() {
	return {
		restrict: 'E',
		template: '<div> The current time is {{time}} </div>',
		link: function(scope, elmnt, attrs) {
			var currentTime = new Date();
			scope.time = currentTime.toString();
		}
	}
})