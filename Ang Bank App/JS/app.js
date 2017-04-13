angular.module('bankApp',['ngRoute',
                          'accMod',
                        'addAccMod',
                        'editAccMod',
                        'deleteAccMod',
                        'activeMod',
                        // 'dbMod',
                        'clockMod',
                        'localStorageMod'
                       ])
                .config( function ($routeProvider,$locationProvider) {
                 $locationProvider.hashPrefix('')
                 $routeProvider
                 .when("/", {
                   templateUrl : "views/accounts.html",
                   controller : "accountCtrl"
                 })
                 .when('/addAccounts.html', {
                   templateUrl : "views/addAccounts.html",
                   controller : "addAccountsCtrl"
                 })
                 .when("/editAccounts.html",{
                   templateUrl : "views/editAccounts.html",
                   controller : "editAccountsCtrl"
                 })
                 .when("/deleteAccounts.html",{
                   templateUrl : "views/deleteAccounts.html",
                   controller : "deleteAccountsCtrl"
                 })
                 .otherwise({
                   redirectTo : "/"
                 })

              })

//iz accounts upotrebi logiku bands app-a sa modalima: klikni na account pa izadje modal sa vise info o coveku,
// na hover da se poveca i druga oja da bude
// novi servis za modal za dodatne info i novi form, prosireni
