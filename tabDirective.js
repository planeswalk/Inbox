'use strict'

define(function(){
	console.log('tabDirective.js loaded');
	
	var core = angular.module('core');
	
	core.directive('tab', function(){
		console.log('tab initialization...');
		return{
			restrict: 'E',
			transclude: true,
			template: '<div role="tabpanel" data-ng-show="active" data-ng-transclude ></div>',
			require: '^tabset',
			scope: {
				heading: '@',
				url: '@',
				selected: '@'
			},
			link: function(scope, elem, attr, tabsetController){
				tabsetController.addTab(scope);				
			}
		}
	});
	
	return core;
});