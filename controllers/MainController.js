app.controller('MainController', function($scope) {
    $scope.currentView = 'partials/home.html';

    $scope.loadView = function(view) {
        $scope.currentView = view;
    };
});

// app.controller('HomeController', function($scope) {
//     $scope.message = 'Welcome to the home page!';
// });

// app.controller('Page1Controller', function($scope) {
//     $scope.message = 'Welcome to page 1!';
// });
// angular.module('myApp', [])
//     controller('MainCtrl', function($scope) {
//       // Initialize visibility states
//       $scope.isDiv1Visible = false;
//       $scope.isDiv2Visible = false;

//       // Function to show specific content
//       $scope.showContent = function(divNumber) {
//         $scope.isDiv1Visible = (divNumber === 1);
//         $scope.isDiv2Visible = (divNumber === 2);
//       };