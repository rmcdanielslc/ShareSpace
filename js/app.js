angular.module('designApp',['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('initial', {
    url: '/',
    templateUrl: 'js/initial/initialTmpl.html',
  })

  .state('home', {
    url: '/home',
    templateUrl: 'js/home/homeTmpl.html',
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'js/signup/signupTmpl.html'
  })

  .state('explore', {
    url: '/explore',
    templateUrl: 'js/explore/exploreTmpl.html'
  })
  .state('groups', {
    url: '/groups',
    templateUrl: 'js/groups/groupsTmpl.html'
  })
  
  .state('about', {
    url: '/about',
    templateUrl: 'js/about/aboutTmpl.html'
  });

  $urlRouterProvider
  .otherwise('/');

});
