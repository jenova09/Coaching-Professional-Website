app.controller('MainCtrl', function($scope) {
    // Initialize visibility states
    $scope.isDiv1Visible = true;
    $scope.isDiv2Visible = false;

    // Function to show specific content
    $scope.showContent = function(divNumber) {
      $scope.isDiv1Visible = (divNumber === 1);
      $scope.isDiv2Visible = (divNumber === 2);
    };
  });