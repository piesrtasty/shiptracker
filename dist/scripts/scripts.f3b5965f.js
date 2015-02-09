(function(){"use strict";angular.module("shiptrackerApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.grid"]).config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/vessels",{templateUrl:"views/vessels.html",controller:"VesselsCtrl"}).when("/footprints",{templateUrl:"views/footprints.html",controller:"FootprintsCtrl"}).when("/devices",{templateUrl:"views/devices.html",controller:"DevicesCtrl"}).otherwise({redirectTo:"/"})}])}).call(this),function(){"use strict";angular.module("shiptrackerApp").controller("MainCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}])}.call(this),function(){"use strict";angular.module("shiptrackerApp").controller("AboutCtrl",["$scope",function(a){return a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}])}.call(this),function(){"use strict";angular.module("shiptrackerApp").controller("VesselsCtrl",["$scope","vesselService",function(a,b){return a.gridOptions1={enableSorting:!0,enableFiltering:!0,columnDefs:[{field:"id"},{field:"name"},{field:"customer_name"},{field:"status"},{field:"latitude"},{field:"longitude"}]},b.getVessels(function(b,c){return a.gridOptions1.data=c})}])}.call(this),function(){angular.module("shiptrackerApp").factory("vesselService",["$http",function(a){return{getVessels:function(b){return a.get("http://shiptrackerapimocks.mtnsat.com/api/vessels").success(function(a){return b(null,a)}).error(function(a){return b(a)})}}}])}.call(this);