angular.module("ngClassifieds", ["ngMaterial","ui.bootstrap","ui-rangeSlider"])
        .config(function($mdThemingProvider) {
		 $mdThemingProvider.theme('default')
		.primaryPalette('teal')
                .accentPalette('orange');
        })