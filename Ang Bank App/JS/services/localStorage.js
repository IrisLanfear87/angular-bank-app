angular.module('localStorageMod',[])
.factory("ls", function ($window) {

  if (!localStorage.getItem('users')) {
  users=[];
  }
  else {
      users=JSON.parse(localStorage.users);
  };
  $window.onbeforeunload = function() {
    localStorage['users'] = JSON.stringify(users);
  }
return users;
  });
