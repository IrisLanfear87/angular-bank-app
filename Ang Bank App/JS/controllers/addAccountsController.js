angular.module('addAccMod',[])
.controller('addAccountsCtrl', function ($scope,ls,$location) {
  $scope.users = ls;
 //  console.log($scope.users);
  $scope.dodajUsera = function () {
    
    ls.push(
      {
        accountNo : $scope.accountNo,
        firstName :$scope.firstName ,
        lastName : $scope.lastName,
        cardType : $scope.cardType,
        cashAmount : $scope.cashAmount
      })


       console.log(ls);
       $location.path("/");
  }
  $scope.vratiNaPocetnu = function () {
    $location.path("/");
  }
})
