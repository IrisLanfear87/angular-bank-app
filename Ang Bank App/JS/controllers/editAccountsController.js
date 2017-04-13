angular.module('editAccMod',[])
.controller('editAccountsCtrl', function ($scope,ls,$location) {
    $scope.users = ls;
    $scope.prikaziTabeluEdit=true;
    $scope.prikaziFormuZaEdit=false;
    $scope.editujUsera = function (prop) {
      $scope.pravimNovogUseraOdSelektovanog = prop;

      $scope.prikaziTabeluEdit=false;
      $scope.prikaziFormuZaEdit=true;
    }
    $scope.vratiNaPocetnu = function () {
      $location.path("/");
    }
})
