angular.module('activeMod',[])
.controller('activeCtrl', function ($scope, $window) {
     $window.addEventListener('load',function () {
       $window.location.hash = '';
     })
     $scope.active=1;
     $scope.changeActive = function (x) {
       $scope.active=x;
     }
})


//napomena : service je constructor function a u factori je fun koja zahteva returnnekog objekta
