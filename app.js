var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
        templateUrl : 'partials/home.html'
    })
    .when('/service', {
        templateUrl : 'partials/service.html',
         controller : 'serviceCtrl'
    })
    .when('/plans', {
        templateUrl : 'partials/plans.html'
    })
    .when('/blogs', {
        templateUrl : 'partials/blogs.html',
         controller : 'blogsCtrl'
    })
    .when('/guides', {
        templateUrl : 'partials/guides.html'
    })
    .when('/login', {
        templateUrl : 'partials/signin.html'
    })


    .otherwise({
        redirectTo: '/'
    });
});

app.controller('serviceCtrl', function($scope) {
    // Initialize visibility states
    $scope.isDiv1Visible = true;
    $scope.isDiv2Visible = false;
    $scope.isDiv3Visible = false;

    // Function to show specific content
    $scope.showContent = function(divNumber) {
       
      $scope.isDiv1Visible = (divNumber === 1);
      $scope.isDiv2Visible = (divNumber === 2);
      $scope.isDiv3Visible = (divNumber === 3);
    };
});

app.controller('blogsCtrl', function($scope) {
    // Initialize visibility states
    $scope.isDiv1Visible = true;
    $scope.isDiv2Visible = false;
    $scope.isDiv3Visible = false;

    // Function to show specific content
    $scope.showContent = function(divNumber) {
      $scope.isDiv1Visible = (divNumber === 1);
      $scope.isDiv2Visible = (divNumber === 2);
      $scope.isDiv3Visible = (divNumber === 3);
    };
});