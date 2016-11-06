(function() {

"use strict";

angular.module("ngClassifieds")
       .controller("classifiedsCtrl",function($scope,$rootScope,$http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {
       	
        //using a instance - classifiedsFactory is defined in classifiedsFac.js which has a http request to get mock json here
        classifiedsFactory.getClassifieds().then(function(classified) {
       		$scope.classifieds = classified.data.products;
       	});
        $scope.sliderDisabled = false;
        $scope.demo2 = {
            range: {
                min: 0,
                max: 10050
            },
            minPrice: 1000,
            maxPrice: 4000
        };

        //scope functions

       	$scope.openSidebar = function() {
			     $mdSidenav('right').open();
       	};
       	$scope.closeSidebar = function() {
			     $mdSidenav('right').close();
       	};

        $scope.openFilterSidebar = function() {
           $mdSidenav('left').open();
        };
        $scope.closeFilterSidebar = function() {
           $mdSidenav('left').close();
        };
       	
       	$scope.saveClassified = function(classified) {
       		if(classified) {
            $scope.classifieds.push(classified);
            var message = "Saved Sucessfully!";
            $scope.messageToast(message);
            $scope.closeSidebar();
       	}};

       	$scope.editClassified = function(classified) {
       		if(classified) {
       		  $scope.saveEdit = true;
            $scope.classified = classified;
            $scope.openSidebar();
       	}};

       	$scope.saveEditClassified = function(classified) {
       		if(classified) {
       		$scope.classified = {};
            $scope.closeSidebar();
            $scope.saveEdit = false;
            var message = "Edited Sucessfully!";
            $scope.messageToast(message);
       	}};

       	$scope.deleteClassified = function(event,classified) {
           var confirm = $mdDialog.confirm()
            				.title("Are you sure you want to delete " + classified.title)
           					.ok("YES")
           					.cancel("No")
           					.targetEvent(event);
           $mdDialog.show(confirm)
           		.then(function() {
           			var index = $scope.classifieds.indexOf(classified);
           			$scope.classifieds.splice(index,1);
           		},
           		function(){});
       	};

       	$scope.messageToast = function(message) {
       		$scope.classified = {};
       	    $scope.closeSidebar();
       	    $mdToast.show(
                $mdToast.simple()
                	.content(message)
                    .position('top, right')
                    .hideDelay(3000)
       	    	);
        };

       });
})();