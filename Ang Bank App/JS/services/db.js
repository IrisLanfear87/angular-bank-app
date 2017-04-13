angular.module('dbMod',[])
   .factory('db', function () {
     
     users = [
       {
         accountNo : 666,
         firstName :'nata' ,
         lastName : 'natic',
         cardType : 'visa',
         cashAmount : 1000
       },
       {
         accountNo : 333,
         firstName : 'pera' ,
         lastName : 'peric',
         cardType : 'mastercard',
         cashAmount : 2000
       },
       {
         accountNo : 111,
         firstName :'zika' ,
         lastName : 'zikic',
         cardType : 'diners',
         cashAmount : 3000
       }
     ]
     return users;
   }

   )
