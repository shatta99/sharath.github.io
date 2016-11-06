(function() {
"use strict";
   angular.module("ngClassifieds")
          .factory("classifiedsFactory",function($http) {
           function getClassifieds(){
             return	$http.get("https://hackerearth.0x10.info/api/fashion?type=json&query=list_products");        
            }
           return {
             getClassifieds: getClassifieds
           }
          });
})();