angular.module('designApp').controller('mainController', function($scope){

 $scope.createUser = function(user) {
   $scope.defaultUser = user;
   $scope.user = {};
 }

  $scope.profiles = function (){
    myService.getUsers()
  }
var hideOption = ['updateEmail', 'updateSettings'];

 $scope.toggleSettings = function (clickedView) {
    hideOption.forEach(function(div) {
      if (div === clickedView) {
        $scope[hideOption] = true;
      } else {
        $scope[hideOption] = false;
      }
    })
  };




})
