angular.module('accMod',[])
.controller('accountCtrl', function ($scope, ls) {
       $scope.users = ls;
})
