angular.module('designApp').controller('mainController', function($scope){

 $scope.createUser = function(user) {
   $scope.defaultUser = user;
   $scope.user = {};
 }

  $scope.profiles = function (){
    myService.getUsers()
  }



})
