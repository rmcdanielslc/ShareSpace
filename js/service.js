angular.module('socialApp').service('myService',function($http){
this.getUsers = function() {
  return $http ({
  method: 'GET',
  url: 'https://randomuser.me/api/?results=5&callback=randomuserdata'
    }).then(function(res){
  return res.data;
})
  }
})
