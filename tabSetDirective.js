'use strict'

define(function(){
	console.log('tabSetDirective.js loaded');
	
	var core = angular.module('core');
	
	core.directive('tabset', function($location){
		console.log('tabs initialization...');
		return{
			restrict: 'E',
			transclude: true,
			template: '\
						<div role="tabpanel">\
							<ul class="nav nav-tabs" role="tablist">\
									<li role="presentation" data-ng-repeat="tab in tabset.tabs" data-ng-class="{active: tab.active}">\
									<a role="tab" data-ng-click="tabset.select(tab)" url="{{tab.url}}">{{tab.heading}}</a>\
								</li>\
							</ul>\
							<data-ng-transclude></data-ng-transclude>\
						</div>',
			bindToController: true,
			scope: true,
			controllerAs: 'tabset',
			controller: function(){
				var vm = this;
				vm.tabs = [];
				
				vm.addTab = function (tab){
					vm.tabs.push(tab);
					if(tab.selected == "true"){
						tab.active = true;
					}
				};
				
				vm.select = function(selectedTab){
					$location.path(selectedTab.url);
				};
			}
		}
	});
	
	return core;
});