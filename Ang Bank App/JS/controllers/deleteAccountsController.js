angular.module('deleteAccMod',[])
.controller('deleteAccountsCtrl', function ($scope,ls) {
    $scope.users = ls;
    $scope.obrisiSelektovanogUsera = function (index) {
      ls.splice(index,1);
    }
})
