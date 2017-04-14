var app = angular.module('designApp').controller('mainController', function($scope){

 $scope.createUser = function(user) {
   $scope.defaultUser = user;
   $scope.user = {};
   console.log($scope.defaultUser)
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

$scope.createGroup = function (group){
  $scope.group = {
    name:'',
    objective:'',
    image:''
  };
  $scope.groups.push(group);
    console.log(group,$scope.groups)
}

$scope.clearFields = function() {
  $scope.defaultUser.firstName = "";
  $scope.defaultUser.lastName = "";
  $scope.defaultUser.email = "";
  $scope.defaultUser.password = "";
  $scope.defaultUser.imageUrl = "";
  $scope.defaultUser.location = "";
  $scope.defaultUser.bio = "";
};

$scope.clearFieldsGroup = function() {
  $scope.group.name = "";
  $scope.group.objective = "";
  $scope.group.image = "";

};

$scope.currentPage = 0;
    $scope.pageSize = 5;

$scope.numberOfPages=function(){
        return Math.ceil($scope.groups.length/$scope.pageSize);
    }
    for (var i=0; i<45; i++) {
      //  $scope.groups.push("group "+ i)
    }

app.filter('startFrom', function() {
    return function(input, start) {
        start = + start;
        return input.slice(start);
    }
});

$scope.groups = [
  {
  name: 'Design',
  objective: 'We like to create stuff'
},
{
name: 'Photography',
objective: 'We like to take photos'
},
{
name: 'Work',
objective: 'Group projects'
},
{
name: 'Random Stuff',
objective: 'I dont know what to do'
},
];



})
